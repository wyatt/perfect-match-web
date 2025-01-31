import React, { useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

// Define types for the data
interface StateData {
    state_code: string;
    state_name: string;
    score_mode: string;
}

interface DistributionData {
    state_name: string;
    score_range1: number;
    score_range2: number;
    score_range3: number;
    score_range4: number;
    score_range5: number;
}

interface PieData {
    range: string;
    value: number;
}

const D3Plot: React.FC = () => {
    useEffect(() => {
        const svg = d3.select<SVGSVGElement, unknown>("#choropleth");
        const width = +svg.attr("width");
        const height = +svg.attr("height");
        const margin = { top: 0, right: 20, bottom: 0, left: 0 };
        const mapWidth = width - margin.left - margin.right;
        const mapHeight = height - margin.top - margin.bottom;

        const map = svg.append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const requestData = async () => {
            // Load TopoJSON and CSV data
            const us: TopoJSON.Topology = await d3.json("/us-smaller.json") as TopoJSON.Topology;
            const aggregateData: StateData[] = await d3.csv<StateData>("/by_state_rice_purity_mode.csv", (d) => ({
                state_code: d.state_code,
                state_name: d.state_name,
                score_mode: d.score_mode,
            }));

            const distributionData: DistributionData[] = await d3.csv<DistributionData>("/by_state_rice_purity_distribution.csv", (d) => ({
                state_name: d.state_name,
                score_range1: +d.score_range1, // Convert to number
                score_range2: +d.score_range2, // Convert to number
                score_range3: +d.score_range3, // Convert to number
                score_range4: +d.score_range4, // Convert to number
                score_range5: +d.score_range5, // Convert to number
            }));

            // Choropleth map
            const states = topojson.feature(us, us.objects.states as TopoJSON.GeometryCollection);
            const statesMesh = topojson.mesh(us, us.objects.states as TopoJSON.GeometryCollection);
            const projection = d3.geoAlbersUsa().fitSize([mapWidth, mapHeight], states);
            const path = d3.geoPath().projection(projection);

            const statePaths = map.selectAll<SVGPathElement, GeoJSON.Feature>("path.state")
                .data(states.features)
                .join("path")
                .attr("class", "state")
                .attr("fill", "lightgrey")
                .attr("d", path)
                .style("transition", "fill 0.5s ease-in-out");

            map.append("path")
                .datum(statesMesh)
                .attr("class", "outline")
                .attr("d", path)
                .style("fill", "none")
                .style("stroke", "white")
                .style("stroke-width", "1.5px");

            // Create a dictionary for state data
            const stateDict: { [key: string]: StateData } = {};
            aggregateData.forEach((d: StateData) => {
                stateDict[d.state_code] = d;
            });

            // Define categories and colors
            const categories = ['Suppressed', '0-20', '21-40', '41-60', '61-80', '81-100'];
            const colors = ['#e9e9e9', '#fff1f2', '#fecdd3', '#fb7185', '#e11d48', '#9f1239'];

            const colorScale = d3.scaleOrdinal<string, string>()
                .domain(categories)
                .range(colors);

            // Fill states with colors based on data
            statePaths.style("fill", (d) => {
                const stateData = stateDict[d.id as string];
                return stateData ? colorScale(stateData.score_mode) : '#e9e9e9'; // Default to grey if no data
            });

            // Tooltip setup
            const tooltip = map.append("g")
                .attr("class", "tooltip")
                .attr("visibility", "hidden");

            tooltip.append("rect")
                .attr("fill", "white")
                .attr("stroke", "black")
                .attr("rx", 5)
                .attr("ry", 5)
                .attr("opacity", 0.9);

            const txt = tooltip.append("text")
                .attr("fill", "black")
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .style("font-weight", "bold");

            const txt2 = tooltip.append("text")
                .attr("fill", "black")
                .attr("text-anchor", "middle")
                .style("font-size", "14px");

            // Debounce function for tooltip
            const debounce = (func: Function, delay: number) => {
                let timeout: NodeJS.Timeout;
                return (...args: any[]) => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => func.apply(null, args), delay);
                };
            };

            // Mouse hover events
            const delayedMouseEnter = debounce((event: MouseEvent, d: GeoJSON.Feature) => {
                tooltip.style("visibility", "visible");

                const state = d3.select<SVGPathElement, GeoJSON.Feature>(event.target as SVGPathElement);
                const stateID = d.id as string;
                const stateDat = stateDict[stateID];

                txt.text(stateDat.state_name);

                if (stateDat.score_mode === "Suppressed") {
                    txt2.text("Data not displayed due to small sample size.");
                } else {
                    txt2.text(`Mode: ${stateDat.score_mode}`);
                }

                // Position tooltip
                const padding = 10;
                const txtBox = (txt.node() as SVGTextElement).getBBox();
                const txt2Box = (txt2.node() as SVGTextElement).getBBox();
                const textWidth = Math.max(txtBox.width, txt2Box.width);
                const textHeight = txtBox.height + txt2Box.height;

                txt.attr("x", 0).attr("y", -textHeight / 2 + txtBox.height - 5);
                txt2.attr("x", 0).attr("y", textHeight / 2 - 3);

                tooltip.select("rect")
                    .attr("x", -textWidth / 2 - padding)
                    .attr("y", -textHeight / 2 - padding)
                    .attr("width", textWidth + padding * 2)
                    .attr("height", textHeight + padding * 2);

                const [xPos, yPos] = path.centroid(d);
                tooltip.attr("transform", `translate(${xPos},${yPos - textHeight - 15})`)
                    .style("visibility", "visible");

                if (stateDat.score_mode !== "Suppressed") {
                    drawPies([stateDat.state_name]);
                } else {
                    drawPies(defaultStates);
                }
            }, 130);

            const delayedMouseLeave = debounce(() => {
                tooltip.style("visibility", "hidden");
                pieSvg.selectAll("*").remove();
                drawPies(defaultStates);
            }, 130);

            statePaths.on("mouseover", delayedMouseEnter).on("mouseout", delayedMouseLeave);

            // Pie chart setup
            const stateData2: { [key: string]: PieData[] } = {};
            distributionData.forEach((d: DistributionData) => {
                stateData2[d.state_name] = [
                    { range: "0-20", value: d.score_range1 },
                    { range: "21-40", value: d.score_range2 },
                    { range: "41-60", value: d.score_range3 },
                    { range: "61-80", value: d.score_range4 },
                    { range: "81-100", value: d.score_range5 },
                ];
            });

            const defaultStates = ["New York", "Colorado", "Florida"];
            const pieRadius = 100;
            const pieHeight = 250;
            const pieSvg = d3.select<SVGSVGElement, unknown>("#pies");

            const pie = d3.pie<PieData>().value((d) => d.value).sort(null);
            const arc = d3.arc<d3.PieArcDatum<PieData>>().innerRadius(0).outerRadius(pieRadius);

            const drawPies = (states: string[]) => {
                pieSvg.selectAll("*").remove();
                states.forEach((stateName, i) => {
                    const ranges = stateData2[stateName];

                    const group = pieSvg.append("g")
                        .attr("transform", `translate(${pieRadius + 10}, ${i * pieHeight + pieRadius + 30})`);

                    // Draw pie slices
                    group.selectAll("path")
                        .data(pie(ranges))
                        .enter()
                        .append("path")
                        .attr("d", arc)
                        .attr("fill", (d) => colorScale(d.data.range))
                        .attr("stroke", "white");

                    // Add percentage labels
                    group.selectAll("text.percentage")
                        .data(pie(ranges))
                        .enter()
                        .append("text")
                        .attr("class", "percentage")
                        .attr("transform", (d) => {
                            const [x, y] = arc.centroid(d);
                            const offset = 1.3;
                            return `translate(${x * offset}, ${y * offset})`;
                        })
                        .attr("text-anchor", "middle")
                        .style("font-size", "14px")
                        .style("fill", "white")
                        .text((d) => {
                            const percentage = parseFloat(d.data.value.toFixed(1)); // Convert to number
                            return percentage > 15 ? `${percentage}%` : "";
                        });

                    // Add state label
                    group.append("text")
                        .attr("text-anchor", "middle")
                        .attr("y", -pieRadius - 10)
                        .style("font-size", "18px")
                        .style("font-weight", "bold")
                        .text(stateName);
                });
            };

            drawPies(defaultStates);
        };

        requestData();
    }, []);

    return (
        <div>
            <h1 style={{ fontFamily: "'Dela Gothic One', sans-serif", fontSize: "40px", marginBottom: "10px" }}>
                By state: What is your Rice Purity Score?
            </h1>
            <p style={{ fontSize: "18px", marginBottom: "0px" }}>
                The higher the number, the purer you are; the lower your score, the more 'corrupt' or rebellious you are.
            </p>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "calc(1050px + 300px)", margin: "10px auto", position: "relative" }}>
                <svg id="legendsvg" width="1000" height="80" style={{ display: "block", margin: "0", marginTop: "10px" }}></svg>

                <div style={{ display: "flex", alignItems: "flex-start", position: "relative" }}>
                    {/* Choropleth */}
                    <div style={{ textAlign: "center", marginRight: "50px" }}>
                        <div>
                            <h4>Most Chosen Option by State</h4>
                            <p>Hover over a state to explore its distribution!</p>
                        </div>
                        <svg id="choropleth" height="700" width="1050" style={{ margin: "-10px -10px -30px 0" }}></svg>
                    </div>

                    {/* Pie Chart */}
                    <div style={{ textAlign: "center", marginLeft: "0px" }}>
                        <h4 style={{ marginLeft: "-80px" }}>Distribution</h4>
                        <svg id="pies" width="300" height="800"></svg>
                    </div>
                </div>
            </div>

            <p style={{ marginTop: "-60px" }}>Data for regions, including those outside the U.S., has been omitted if the sample size is too small to be representative.</p>
        </div>
    );
};

export default D3Plot;