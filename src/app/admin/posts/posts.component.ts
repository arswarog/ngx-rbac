import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../services/posts.interface';

@Component({
    selector   : 'app-admin-posts',
    templateUrl: './posts.component.html',
    styleUrls  : ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

    public posts: IPost[] = [];

    constructor(private postsService: PostsService) { }

    ngOnInit() {
        this.posts = this.postsService.list();
    }

}
