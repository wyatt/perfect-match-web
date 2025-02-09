import React from 'react';
import * as Survey from 'survey-react';
import { questions } from './content';
import 'survey-react/modern.min.css';

const SurveyComponent = (props: any) => {
    Survey.StylesManager.applyTheme('modern');

    const survey = new Survey.Model(questions);
    survey.sendResultOnPageNext = true;
    const storageName = 'SurveyNextjs';

    survey.onTextMarkdown.add(function (survey: any, options: any) {
        options.html = options.text;
    });

    function saveSurveyData(survey: any) {
        let data = survey.data;
        data.pageNo = survey.currentPageNo;
        window.localStorage.setItem(storageName, JSON.stringify(data));
    }

    survey.onPartialSend.add(saveSurveyData);
    survey.onValueChanged.add(saveSurveyData);
    survey.onCurrentPageChanged.add(saveSurveyData);
    survey.onCurrentPageChanged.add(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const prevData = JSON.stringify(props.survey);

    if (props.survey?.complete) {
        let data = JSON.parse(prevData);
        survey.data = data;
        if (data.pageNo) {
            survey.currentPageNo = data.pageNo;
        }
    } else {
        let data = window.localStorage.getItem(storageName);
        if (data) {
            survey.data = JSON.parse(data);
        }
    }

    survey.onComplete.add(async function (survey: any, options: any) {
        window.localStorage.removeItem(storageName);
        await fetch('/api/survey', {
            method: 'POST',
            body: JSON.stringify({ ...survey.data, ...{ complete: true } }),
        }).then((res) => props.refresh());
    });

    var defaultThemeColors = Survey.StylesManager.ThemeColors['default'];
    defaultThemeColors['$main-color'] = '#fb7185';
    defaultThemeColors['$main-hover-color'] = '#fb7185';
    defaultThemeColors['$header-color'] = '#fb7185';
    defaultThemeColors['$primary'] = '#fb7185';
    defaultThemeColors['$error-color'] = '#fecdd3';
    defaultThemeColors['$error-background-color'] = '#fecdd3';
    defaultThemeColors['$answer-background-color'] = '#rgba(255, 157, 165, 0.5)';

    defaultThemeColors['$progress-buttons-color'] = '#f1f5f9';

    Survey.StylesManager.applyTheme('default');
    return <Survey.Survey model={survey} />;
};

export default SurveyComponent;
