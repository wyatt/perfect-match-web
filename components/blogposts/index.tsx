import React from 'react';

const componentFiles = [
    'samplepost',

];

const Blogposts: React.FC = () => {
    return (
        <div>
            <h1>Your Page</h1>
            {componentFiles.map((componentName, index) => {
                const DynamicComponent = React.lazy(() =>
                    import("@/components/blogposts/posts/samplepost")
                );

                return <DynamicComponent key={index} />;
            })}
        </div>
    );
};

export default Blogposts;
