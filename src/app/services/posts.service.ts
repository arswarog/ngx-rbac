import { Injectable } from '@angular/core';
import { IPost } from './posts.interface';
import { demoPosts } from './posts';

@Injectable({
    providedIn: 'root',
})
export class PostsService {

    private posts: IPost[] = [];

    constructor() {
        this.posts = demoPosts;
    }

    public list(): IPost[] {
        return this.posts;
    }

    public getPost(id: string): IPost {
        return this.posts.find(post => post.id === id);
    }
}
