import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { PostComponent } from './post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CommentComponent } from './comment/comment.component';
import { EditComponent } from './comment/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxRbacModule } from 'ngx-rbac';

const routes: Routes = [
    {
        path     : '',
        component: ClientComponent,
        children : [
            {
                path     : '',
                component: ListComponent,
            },
            {
                path     : 'post/:id',
                component: PostComponent,
            },
        ],
    },
];


@NgModule({
    declarations: [
        ClientComponent,
        PostComponent,
        ListComponent,
        CommentComponent,
        EditComponent,
    ],
    imports     : [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxRbacModule.forChild('asd', {forChild: {children: ['asd']}}),
    ],
    exports     : [
        PostComponent,
        CommentComponent,
        EditComponent,
    ],
})
export class ClientModule {
}
