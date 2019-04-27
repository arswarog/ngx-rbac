export enum PostStatus {
    Draft = 'draft',
    ToApprove = 'to approve',
    Published = 'published',
}

export interface IPost {
    id: string;
    title: string;
    text: string;
    author: string;
    status: PostStatus;
    comments: IComment[];
}

export interface IComment {
    id: string;
    text: string;
    author: string;
    approved: boolean;
}

