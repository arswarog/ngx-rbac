import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../../services/posts.interface';

@Component({
    selector   : 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls  : ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

    @Input() comment: IComment = null;

    constructor() { }

    ngOnInit() {
    }

}
