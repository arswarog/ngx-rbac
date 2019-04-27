import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxRbacGuard } from 'ngx-rbac';
import { NgxRbacModule } from 'ngx-rbac';
import { RbacRules } from 'ngx-rbac';
import { ToolboxComponent } from './toolbox/toolbox.component';

const routes: Routes = [
    {
        path        : '',
        loadChildren: './client/client.module#ClientModule',
    },
    {
        path        : 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canLoad     : [NgxRbacGuard],
        data        : {
            roles: ['admin', 'moderator'],
        },
    },
    {
        path      : '**',
        redirectTo: '',
    },
];

const rules: RbacRules = {
    admin    : {
        children: ['moderator', 'user'],
    },
    moderator: {
        children: ['user'],
    },
};

@NgModule({
    declarations: [
        AppComponent,
        ToolboxComponent,
    ],
    imports     : [
        BrowserModule,
        RouterModule.forRoot(routes, {enableTracing: false, useHash: true}),
        NgxRbacModule.forRoot(rules, {defaultRoles: ['user'], debug: true}),
    ],
    providers   : [],
    bootstrap   : [
        AppComponent,
    ],
})
export class AppModule {
}
