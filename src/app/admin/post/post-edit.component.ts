import { Component, OnInit } from '@angular/core';
import { IComment, IPost, PostStatus } from '../../services/posts.interface';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
    selector   : 'app-post',
    templateUrl: './post-edit.component.html',
    styleUrls  : ['./post-edit.component.scss'],
})
export class PostEditComponent implements OnInit {

    post: IPost = null;

    constructor(private activatedRoute: ActivatedRoute,
                private postsService: PostsService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.post = this.postsService.getPost(params.id);
            if (!this.post) {
                this.post = {
                    id      : '',
                    title   : 'Post not found',
                    author  : '',
                    status  : PostStatus.Published,
                    text    : 'Post not found, try go back',
                    comments: [],
                };
            }
        });
    }

    public approve(comment: IComment) {

    }
}
