import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../../../services/posts.interface';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

    @Input() comment: IComment = null;

    constructor(private postsService: PostsService) { }

    ngOnInit() {
    }
}
