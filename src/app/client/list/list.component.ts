import { Component, OnInit } from '@angular/core';
import { IPost } from '../../services/posts.interface';
import { PostsService } from '../../services/posts.service';

@Component({
    selector   : 'app-list',
    templateUrl: './list.component.html',
    styleUrls  : ['./list.component.scss'],
})
export class ListComponent implements OnInit {

    public posts: IPost[] = [];

    constructor(private postsService: PostsService) { }

    ngOnInit() {
        this.posts = this.postsService.list();
    }
}
