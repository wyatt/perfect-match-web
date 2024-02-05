// components/survey/content/index.tsx

export const questions = {
    logoPosition: 'right',
    focusFirstQuestionAutomatic: false,
    checkErrorsMode: 'onValueChanged',
    completedHtml: '<h3>Survey Updated!<h3>',

    pages: [
        {
            name: 'Welcome',
            title: 'Perfect Match 2024',
            description: 'Elements marked <> will be shared with your matches.',

            elements: [
                {
                    type: 'panel',
                    name: 'social_media',
                    elements: [
                        {
                            type: 'multipletext',
                            name: 'contact',
                            title: '<> When we find your matches how do you want them to contact you? At least one social media link is required.',
                            validators: [
                                {
                                    type: 'expression',
                                    text: 'Please enter at least one method of contact',
                                    expression:
                                        '{contact.fb} notempty or {contact.insta} notempty or {contact.linkedin} notempty or {contact.snapchat} notempty or {contact.twitter} notempty or {contact.phone} notempty or {contact.other} notempty',
                                },
                            ],
                            items: [
                                {
                                    name: 'fb',
                                    title: 'Facebook profile link',
                                },
                                {
                                    name: 'insta',
                                    title: 'Instagram handle',
                                },
                                {
                                    name: 'twitter',
                                    title: 'Twitter handle',
                                },
                                {
                                    name: 'snapchat',
                                    title: 'Snapchat username',
                                },
                                {
                                    name: 'linkedin',
                                    title: 'LinkedIn profile link',
                                },
                                {
                                    name: 'phone',
                                    title: 'Phone number',
                                },
                                {
                                    name: 'other',
                                    title: 'Other',
                                },
                            ],
                            colCount: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: 'Cornell',
            title: 'Cornell',
            description: 'Elements marked <> will be shared with your matches.',

            elements: [
                {
                    type: 'radiogroup',
                    name: 'faction',
                    title: 'What’s the most traumatizing Cornell faction your prospective match could belong to?',
                    isRequired: true,
                    choices: [
                        {
                            value: 'noshower',
                            text: 'Near the top of the class for engineering talent, near the bottom for shower frequency',
                        },
                        {
                            value: 'dyson',
                            text: 'Stress-free Dyson pupil, but claims to have a “genuine interest” in Discounted Cash Flow models.',
                        },
                        {
                            value: 'med',
                            text: 'Pre-med who spends all their time complaining about CHEM 2070 on Sidechat.',
                        },
                        {
                            value: 'phil',
                            text: 'Philosophy major that can’t pay the bills but declares their love to you in a timeless sonnet.',
                        },
                    ],
                },
                {
                    type: 'dropdown',
                    name: 'libraryRanking',
                    title: "If they’re a 5 in the Hotel Library, they're a _ in Duffield.",
                    isRequired: true,
                    choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                },
                {
                    type: 'radiogroup',
                    name: 'clothDate',
                    title: 'Worst thing your match could wear on a date:',
                    isRequired: true,
                    choices: [
                        {
                            value: 'gries',
                            text: 'David Gries 73 Years of Programming Experience T-Shirt',
                        },
                        {
                            value: 'jersey',
                            text: 'Cornell Hockey Jersey with some residual fish guts from the Cornell-Harvard game',
                        },
                        {
                            value: 'vest',
                            text: 'Patagonia Vest from their past internship',
                        },
                        {
                            value: 'letterman',
                            text: 'Scarsdale High School T-Shirt',
                        },
                    ],
                },
                {
                    type: 'radiogroup',
                    name: 'alternative',
                    title: 'Choose the best alternative. Your match is a 10, but they ____.',
                    isRequired: true,
                    choices: [
                        {
                            value: 'drunk',
                            text: 'Drunk texted their ex last night',
                        },
                        {
                            value: 'gothics',
                            text: 'Lives in the Gothics',
                        },
                        {
                            value: 'basement',
                            text: 'Enjoys studying in the Olin Basement',
                        },
                        {
                            value: 'oken',
                            text: 'Eats at Okenshields everyday',
                        },
                        {
                            value: 'hinge',
                            text: 'Got matched with your roommate on Hinge',
                        },
                    ],
                },
                {
                    type: 'radiogroup',
                    name: 'task',
                    title: 'In the next year, I want to complete this task from the 161 Things Every Cornellian Should Do. ',
                    isRequired: true,
                    choices: [
                        {
                            value: 'hookup',
                            text: 'Hook up with your T.A.',
                        },
                        {
                            value: 'bridge',
                            text: 'Kiss on the suspension bridge at midnight',
                        },
                        {
                            value: 'stacks',
                            text: 'Make the library into your bedroom and have sex in the stacks',
                        },
                        {
                            value: 'flirt',
                            text: 'Flirt with your professor',
                        },
                    ],
                },
                {
                    type: 'radiogroup',
                    name: 'study',
                    title: 'Late night study sesh on campus. Where?',
                    isRequired: true,
                    choices: [
                        {
                            value: 'duff',
                            text: 'Duffield',
                        },
                        {
                            value: 'cock',
                            text: 'Cocktail',
                        },
                        {
                            value: 'psb',
                            text: 'PSB',
                        },
                        {
                            value: 'lib',
                            text: 'Library',
                        },
                        {
                            value: 'goldwin',
                            text: 'Goldwin Classroom',
                        },
                        {
                            value: 'room',
                            text: 'My Cozy Room',
                        },
                    ],
                },
            ],
        },

        {
            name: 'Interests',
            elements: [
                {
                    type: 'html',
                    name: 'disclaimer',
                    html: '<br><span style = "font-size:16px"><strong>Note: Questions marked with a "<>" may be shared with your matches. All other information will remain private and confidential</strong></span>',
                },
                {
                    type: 'checkbox',
                    name: 'interests',
                    title: '<> I am passionate about... (Select your top 3, and feel free to elaborate on them in your bio!)',
                    isRequired: true,
                    choices: [
                        {
                            value: 'travel',
                            text: 'Travel',
                        },
                        {
                            value: 'tech',
                            text: 'Science/Tech',
                        },
                        {
                            value: 'music',
                            text: 'Music',
                        },
                        {
                            value: 'art',
                            text: 'Art',
                        },
                        {
                            value: 'fitness',
                            text: 'Fitness',
                        },
                        {
                            value: 'literature',
                            text: 'Literature/Reading',
                        },
                        {
                            value: 'food',
                            text: 'Food',
                        },
                        {
                            value: 'film',
                            text: 'Entertainment and film',
                        },
                        {
                            value: 'sports',
                            text: 'Sports',
                        },
                        {
                            value: 'games',
                            text: 'Games',
                        },
                    ],
                },
                {
                    type: 'checkbox',
                    name: 'music',
                    title: 'Favorite Music Genre(s): [can check all that apply]',
                    isRequired: true,
                    choices: [
                        {
                            value: 'pop',
                            text: 'Pop',
                        },
                        {
                            value: 'rock',
                            text: 'Rock',
                        },
                        {
                            value: 'indie',
                            text: 'Indie',
                        },
                        {
                            value: 'rap',
                            text: 'Rap',
                        },
                        {
                            value: 'jazz',
                            text: 'Jazz',
                        },
                        {
                            value: 'blues',
                            text: 'Blues',
                        },
                        {
                            value: 'reggaeton',
                            text: 'Reggaeton',
                        },
                        {
                            value: 'rAndB',
                            text: 'R&B',
                        },
                        {
                            value: 'classical',
                            text: 'Classical',
                        },
                        {
                            value: 'kpop',
                            text: 'K-pop',
                        },
                        {
                            value: 'edm',
                            text: 'EDM',
                        },
                    ],
                },
                {
                    name: 'hookupsong',
                    isRequired: true,

                    type: 'text',
                    title: 'The First Song of My Hook-Up Playlist Is…',
                },
            ],
        },
        {
            name: 'Relationship Tendencies',
            elements: [
                {
                    type: 'radiogroup',
                    name: 'tv',
                    title: 'Which of these recent shows will you binge-watch with your match?',
                    isRequired: true,
                    choices: [
                        {
                            value: 'white',
                            text: 'White Lotus',
                        },
                        {
                            value: 'bear',
                            text: 'The Bear',
                        },
                        {
                            value: 'ted',
                            text: 'Ted Lasso',
                        },
                        {
                            value: 'succession',
                            text: 'Succession',
                        },
                        {
                            value: 'percy',
                            text: 'Percy Jackson',
                        },
                        {
                            value: 'lastofus',
                            text: 'Last Of Us',
                        },
                        {
                            value: 'singles',
                            text: 'Singles Inferno',
                        },
                        {
                            value: 'boys',
                            text: 'The Boys',
                        },
                    ],
                },
                {
                    type: 'radiogroup',
                    name: 'date',
                    title: 'Where would you go on a first date?',
                    isRequired: true,
                    choices: [
                        {
                            value: 'coffee',
                            text: 'Coffee on campus',
                        },
                        {
                            value: 'cinema',
                            text: 'Cornell Cinema',
                        },
                        {
                            value: 'commons',
                            text: 'Restaurant in the Commons',
                        },
                        {
                            value: 'dininghall',
                            text: 'Dining hall',
                        },
                        {
                            value: 'fishbowl',
                            text: 'Pushing fishbowl',
                        },
                    ],
                },
                {
                    type: 'radiogroup',
                    name: 'whopays',
                    title: 'Would you prefer that your match ___ on the first date',
                    isRequired: true,
                    choices: [
                        {
                            value: 'pays',
                            text: 'Pays',
                        },
                        {
                            value: 'splits',
                            text: 'Splits',
                        },
                        {
                            value: 'youpay',
                            text: 'Lets you pay',
                        },
                        {
                            value: 'doesntmatter',
                            text: "It doesn't matter",
                        },
                    ],
                },
                {
                    type: 'radiogroup',
                    name: 'ick',
                    title: 'What’s your biggest ick in a relationship?',
                    isRequired: true,
                    choices: [
                        {
                            value: 'westchester',
                            text: 'From Westchester',
                        },
                        {
                            value: 'astrology',
                            text: 'Believes in astrology',
                        },
                        {
                            value: 'beerpongball',
                            text: 'Chasing a beer pong ball',
                        },
                        {
                            value: 'footballteam',
                            text: 'Referring to their football team as ‘we’',
                        },
                        {
                            value: 'gymrat',
                            text: 'Gym rat',
                        },
                    ],
                },
                {
                    type: 'radiogroup',
                    name: 'greenflag',
                    title: 'What’s your biggest green flag in a relationship?',
                    isRequired: true,
                    choices: [
                        {
                            value: 'gcaldate',
                            text: 'Send you a GCal invite for the date',
                        },
                        {
                            value: 'petlike',
                            text: 'Your pet likes them',
                        },
                        {
                            value: 'screentime',
                            text: 'Low screen time',
                        },
                        {
                            value: 'smellsgood',
                            text: 'Smells Good',
                        },
                        {
                            value: 'gymrat',
                            text: 'Gym Rat',
                        },
                    ],
                },
                {
                    type: 'radiogroup',
                    name: 'lovelanguage',
                    title: 'What`s your most important love language?',
                    isRequired: true,
                    choices: [
                        {
                            value: 'acts',
                            text: 'Acts of service',
                        },
                        {
                            value: 'quality',
                            text: 'Quality time',
                        },
                        {
                            value: 'gifts',
                            text: 'Receiving gifts',
                        },
                        {
                            value: 'touch',
                            text: 'Physical touch',
                        },
                        {
                            value: 'words',
                            text: 'Words of affirmation',
                        },
                        {
                            value: 'unsure',
                            text: 'Not sure',
                        },
                    ],
                },
                {
                    type: 'radiogroup',
                    name: 'quality',
                    title: 'What quality do you value most?',
                    isRequired: true,
                    choices: [
                        {
                            value: 'reliability',
                            text: 'Reliability',
                        },
                        {
                            value: 'humor',
                            text: 'Humor',
                        },
                        {
                            value: 'thoughtfulness',
                            text: 'Thoughtfulness',
                        },
                        {
                            value: 'independence',
                            text: 'Independence',
                        },
                    ],
                },
            ],
        },
        {
            name: 'General Tendencies',
            elements: [
                {
                    type: 'dropdown',
                    name: 'sleeptime',
                    title: 'What time do you go to bed?',
                    isRequired: true,
                    choices: ['7pm', '8pm', '9pm', '10pm', '11pm', '12am', '1am', '2am', '3am', '4am', '5am', '6am'],
                },
                {
                    type: 'dropdown',
                    name: 'waketime',
                    title: 'What time do you wake up?',
                    isRequired: true,
                    choices: [
                        '3am',
                        '4am',
                        '5am',
                        '6am',
                        '7am',
                        '8am',
                        '9am',
                        '10am',
                        '11am',
                        '12pm',
                        '1pm',
                        '2pm',
                        '3pm',
                    ],
                },
                {
                    type: 'radiogroup',
                    name: 'perfectDay',
                    title: 'What would your perfect day look like?',
                    isRequired: true,
                    choices: [
                        {
                            value: 'outdoor',
                            text: 'Going on an outdoor adventure',
                        },
                        {
                            value: 'netflix',
                            text: 'Watching Netflix',
                        },
                        {
                            value: 'newppl',
                            text: 'Meeting new people',
                        },
                        {
                            value: 'newfood',
                            text: 'Trying new cuisines',
                        },
                        {
                            value: 'museums',
                            text: 'Visiting museums',
                        },
                        {
                            value: 'gaming',
                            text: 'Playing video games',
                        },
                        {
                            value: 'sleep',
                            text: 'Sleeping',
                        },
                        {
                            value: 'friends',
                            text: 'Hanging out with close friends',
                        },
                        {
                            value: 'city',
                            text: 'Exploring a city',
                        },
                        {
                            value: 'study',
                            text: 'Studying',
                        },
                    ],
                },
                {
                    type: 'radiogroup',
                    name: 'plans',
                    title: 'Your plans get messed up for the day. You would...?',
                    isRequired: true,
                    choices: [
                        {
                            value: 'shift',
                            text: 'Shift your day’s schedule',
                        },
                        {
                            value: 'flow',
                            text: 'Go with the flow',
                        },
                        {
                            value: 'cancel',
                            text: 'Cancel all your plans',
                        },
                        {
                            value: 'new',
                            text: 'Contact someone to make entirely new plans',
                        },
                    ],
                },
                {
                    type: 'checkbox',
                    name: 'humor',
                    title: 'My sense of humor is...',
                    isRequired: true,
                    choices: [
                        {
                            value: 'physical',
                            text: 'Physical, slapstick, pranks ',
                        },
                        {
                            value: 'witty',
                            text: 'Witty, dry, sarcastic',
                        },
                        {
                            value: 'puns',
                            text: 'Punny',
                        },
                        {
                            value: 'observational',
                            text: 'Observational',
                        },
                        {
                            value: 'deprecating',
                            text: 'Self-deprecating',
                        },
                        {
                            value: 'improv',
                            text: 'Improvisational',
                        },
                        {
                            value: 'surreal',
                            text: 'Surreal, absurd',
                        },
                        {
                            value: 'cultural',
                            text: 'Highbrow, literary, cultural references',
                        },
                    ],
                },
                {
                    type: 'checkbox',
                    name: 'sociability',
                    title: 'How would you describe your social presence? (Check all that apply)',
                    isRequired: true,
                    hasNone: true,
                    choices: [
                        {
                            value: 'party',
                            text: 'I like parties',
                        },
                        {
                            value: 'storyteller',
                            text: 'I am a good storyteller',
                        },
                        {
                            value: 'in_touch',
                            text: 'I am good at keeping in touch ',
                        },
                        {
                            value: 'popular',
                            text: 'I consider myself to be popular',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Personality',
            elements: [
                {
                    type: 'rating',
                    name: 'p1',
                    title: 'Most of my time is spent with the same group of friends.',
                    isRequired: true,
                    rateValues: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
                },
                {
                    type: 'rating',
                    name: 'p2',
                    title: 'I like people who always seek adventure.',
                    isRequired: true,
                    rateValues: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
                },
                {
                    type: 'rating',
                    name: 'p3',
                    title: 'I am more of an improvisor than a planner.',
                    isRequired: true,
                    rateValues: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
                },
                {
                    type: 'rating',
                    name: 'p4',
                    title: 'I don’t mind being the center of attention.',
                    isRequired: true,
                    rateValues: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
                },
                {
                    type: 'rating',
                    name: 'p5',
                    title: 'I tend to put myself first and others second.',
                    isRequired: true,
                    rateValues: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
                },

                {
                    type: 'rating',
                    name: 'p6',
                    title: 'I see myself as more of a compromiser than a fighter.',
                    isRequired: true,
                    rateValues: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
                },
                {
                    type: 'rating',
                    name: 'p7',
                    title: 'I like it when people always say what’s on their mind.',
                    isRequired: true,
                    rateValues: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
                },
                {
                    type: 'rating',
                    name: 'p8',
                    title: "I'd take a challenging (but interesting) class over an easy (but boring) class.",
                    isRequired: true,
                    rateValues: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
                },
                {
                    type: 'rating',
                    name: 'p9',
                    title: 'When a friend is sad, I am more likely to offer solutions to the problem rather than emotional support.',
                    isRequired: true,
                    rateValues: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
                },
                {
                    type: 'rating',
                    name: 'p10',
                    title: 'When I have a personal problem, I try to solve it on my own rather than talk to others.',
                    isRequired: true,
                    rateValues: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
                },
                {
                    type: 'rating',
                    name: 'p11',
                    title: 'I spend time exploring unrealistic but intriguing ideas.',
                    isRequired: true,
                    rateValues: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
                },
                {
                    type: 'radiogroup',
                    name: 'generalPersonality',
                    title: 'In general, I want my matches to be...',
                    isRequired: true,
                    choices: [
                        {
                            value: 'simlar',
                            text: 'More different to me in personality.',
                        },
                        {
                            value: 'different',
                            text: 'More similar to me in personality.',
                        },
                        {
                            value: 'either',
                            text: 'Either.'
                        }
                    ],
                },
                {
                    type: 'panel',
                    name: 'panel1',
                    elements: [
                        {
                            type: 'rating',
                            name: 'introvert',
                            title: 'I am...',
                            isRequired: true,
                            rateMax: 10,
                            minRateDescription: 'Very introverted',
                            maxRateDescription: 'Very extroverted',
                        },
                        {
                            type: 'radiogroup',
                            name: 'introvert_same',
                            indent: 3,
                            title: 'I prefer my partner to be...',
                            isRequired: true,
                            choices: [
                                {
                                    value: 'same',
                                    text: 'The same',
                                },
                                {
                                    value: 'less',
                                    text: 'Less extroverted',
                                },
                                {
                                    value: 'more',
                                    text: 'More extroverted',
                                },
                                {
                                    value: 'doesnt_matter',
                                    text: "It doesn't matter",
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'panel',
                    name: 'panel2',
                    elements: [
                        {
                            type: 'rating',
                            name: 'easygoing',
                            title: 'I am...',
                            isRequired: true,
                            rateMax: 10,
                            minRateDescription: 'Easygoing',
                            maxRateDescription: 'Assertive',
                        },
                        {
                            type: 'radiogroup',
                            name: 'easygoing_same',
                            indent: 3,
                            title: 'I prefer my partner to be...',
                            isRequired: true,
                            choices: [
                                {
                                    value: 'same',
                                    text: 'The same',
                                },
                                {
                                    value: 'less',
                                    text: 'Less assertive',
                                },
                                {
                                    value: 'more',
                                    text: 'More assertive',
                                },
                                {
                                    value: 'doesnt_matter',
                                    text: "It doesn't matter",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: 'Finale',
            elements: [
                {
                    type: 'text',
                    name: 'numdated',
                    isRequired: true,

                    title: 'How many people have you dated in the last 5 years?',
                    validators: [
                        {
                            type: 'numeric',
                            text: '',
                            minValue: 0,
                            maxValue: 200,
                        },
                    ],
                },
                {
                    type: 'text',
                    name: 'longestrelationship',
                    title: 'How many months was your longest relationship?',
                    requiredErrorText: 'You relationship must be between 0 and 144',
                    isRequired: true,
                    validators: [
                        {
                            type: 'numeric',
                            text: '',
                            minValue: 0,
                            maxValue: 200,
                        },
                    ],
                },
                {
                    type: 'dropdown',
                    name: 'ricePurity',
                    title: 'What is your Rice Purity Score?',
                    isRequired: true,
                    choices: ['0-20', '21-40', '41-60', '61-80', '81-100'],
                },

                {
                    type: 'radiogroup',
                    name: 'pairedwith',
                    title: 'I would like to be paired with someone who...',
                    isRequired: true,
                    choices: [
                        {
                            value: 'similar',
                            text: 'Has mostly similar interests to me',
                        },
                        {
                            value: 'different',
                            text: 'Has mostly different interests than me',
                        },
                        {
                            value: 'either',
                            text: 'I am fine with either',
                        },
                    ],
                },
                // {
                //     type: 'checkbox',
                //     name: 'apps',
                //     title: 'What dating apps do you use',
                //     hasNone: true,

                //     isRequired: true,
                //     choices: [
                //         {
                //             value: 'tinder',
                //             text: 'Tinder',
                //         },
                //         {
                //             value: 'bumble',
                //             text: 'Bumble',
                //         },
                //         {
                //             value: 'grindr',
                //             text: 'Grindr',
                //         },
                //         {
                //             value: 'hinge',
                //             text: 'Hinge',
                //         },
                //     ],
                // },
                {
                    type: 'rating',
                    name: 'politics',
                    title: 'What are your political tendencies?',
                    rateMax: 10,
                    isRequired: true,
                    minRateDescription: 'Left',
                    maxRateDescription: 'Right',
                },
                {
                    type: 'rating',
                    name: 'politically_active',
                    title: 'I consider myself politically active.',
                    isRequired: true,
                    minRateDescription: 'Very inactive',
                    maxRateDescription: 'Very active',
                },
                {
                    type: 'matrix',
                    name: 'habits',
                    title: 'How often do you use the following?',
                    columns: [
                        {
                            value: 'never',
                            text: 'Never',
                        },
                        {
                            value: 'rarely',
                            text: 'Rarely',
                        },
                        {
                            value: 'sometimes',
                            text: 'Monthly',
                        },
                        {
                            value: 'often',
                            text: 'Weekly',
                        },
                        {
                            value: 'very_frequently',
                            text: 'Daily',
                        },
                    ],
                    rows: [
                        {
                            value: 'drinking',
                            text: 'Alcohol',
                        },
                        {
                            value: 'smoking',
                            text: 'Cigarettes/E-cigs ',
                        },
                        {
                            value: 'weed',
                            text: 'Marijuana',
                        },
                        {
                            value: 'other',
                            text: 'Other drugs',
                        },
                    ],
                },
                {
                    type: 'matrix',
                    name: 'partner_habits',
                    title: 'At MAXIMUM, how often is it okay for your partner to use the following?',
                    columns: [
                        {
                            value: 'never',
                            text: 'Never',
                        },
                        {
                            value: 'rarely',
                            text: 'Rarely',
                        },
                        {
                            value: 'sometimes',
                            text: 'Monthly',
                        },
                        {
                            value: 'often',
                            text: 'Weekly',
                        },
                        {
                            value: 'dont_care',
                            text: "Don't care",
                        },
                    ],
                    rows: [
                        {
                            value: 'drinking',
                            text: 'Alcohol',
                        },
                        {
                            value: 'smoking',
                            text: 'Cigarettes/E-cigs ',
                        },
                        {
                            value: 'weed',
                            text: 'Marijuana',
                        },
                        {
                            value: 'other',
                            text: 'Other drugs',
                        },
                    ],
                },
                {
                    type: 'checkbox',
                    name: 'deal_breakers',
                    title: 'What is deal breaker for you? (Check all that apply)',
                    isRequired: true,
                    choices: [
                        {
                            value: 'politics',
                            text: 'Difference in political views',
                        },
                        {
                            value: 'social',
                            text: 'Difference in social habits',
                        },
                    ],
                    hasNone: true,
                },
                {
                    type: 'html',
                    name: 'disregard1',
                    html: 'Disclaimer: <br><i>Perfect Match does not take any responsibility and is not liable for any distress caused through the use of our service. By responding to this form, you are giving Perfect Match the right to process your data and match you with another individual at Cornell. Perfect Match takes precautions to protect your privacy and to keep your information secure. We strive to be transparent in the way we process your data and will be sharing our project’s process with you soon!</i>',
                },
            ],
        },
    ],
    showProgressBar: 'top',
    progressBarType: 'buttons',
    completeText: 'Submit',
    showPreviewBeforeComplete: 'showAllQuestions',
    showQuestionNumbers: false,
    widthMode: 'static',
    width: '1200px',
};
