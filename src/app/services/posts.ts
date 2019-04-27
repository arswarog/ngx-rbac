import { IPost, PostStatus } from './posts.interface';

export const demoPosts: IPost[] = [
    {
        id      : 'intro',
        title   : 'Intro',
        text    : 'This is intro',
        status  : PostStatus.Published,
        author  : 'admin',
        comments: [
            {
                id      : '20166af6-cc10-4917-89d3-d39a57ecd757',
                author  : 'vasya',
                text    : 'It\'s cool!',
                approved: true,
            },
            {
                id      : '56fe77ed-3c4b-4bb8-af63-70b9aa5617c9',
                author  : 'alex',
                text    : 'Yes, it\'s true',
                approved: false,
            },
        ],
    },
    {
        id      : 'secret',
        title   : 'Secret post',
        text    : 'The text about secrets',
        status  : PostStatus.Draft,
        author  : 'admin',
        comments: [
            {
                id      : '16d38125-adc6-4aaa-83da-587a220e86fc',
                author  : 'alex',
                text    : 'Nice',
                approved: false,
            },
        ],
    },
];
