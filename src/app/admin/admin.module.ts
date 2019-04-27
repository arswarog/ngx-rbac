import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibleComponent } from 'ngx-rbac';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostEditComponent } from './post/post-edit.component';
import { NgxRbacModule, RbacRules, NgxRbacGuard } from 'ngx-rbac';

const routes: Routes = [
    {
        path            : '',
        component       : AdminComponent,
        canActivateChild: [NgxRbacGuard],
        children        : [
            {
                path     : '',
                component: AccessibleComponent,
            },
            {
                path     : 'posts',
                component: PostsComponent,
                data     : {
                    roles: ['moderator'],
                },
            },
            {
                path     : 'post/:id',
                component: PostEditComponent,
                data     : {
                    roles: ['admin'],
                },
            },
        ],
    },
];

const rules: RbacRules = {
    admin: {
        children: ['admin.human'],
    },
    human: {
        children: ['post.edit'],
    },
};

@NgModule({
    declarations: [
        AdminComponent,
        PostsComponent,
        PostEditComponent,
    ],
    imports     : [
        CommonModule,
        RouterModule.forChild(routes),
        NgxRbacModule.forChild(rules, 'admin'),
    ],
})
export class AdminModule {
}
