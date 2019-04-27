import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostEditComponent } from './post/post-edit.component';
import { NgxRbacModule, RbacRules } from 'ngx-rbac';

const routes: Routes = [
    {
        path     : '',
        component: AdminComponent,
        children : [
            {
                path     : '',
                component: PostsComponent,
            },
            {
                path     : 'post/:id',
                component: PostEditComponent,
            },
        ],
    },
];

const rules: RbacRules = {
    admin: {
        children: ['human'],
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
        NgxRbacModule.forChild('admin', rules),
    ],
})
export class AdminModule {
}
