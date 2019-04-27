import { Component, OnInit } from '@angular/core';
import { NgxRbacService } from 'ngx-rbac';
import { UsersService } from '../services/users.service';
import { IUser } from '../services/users.interface';

@Component({
    selector   : 'app-toolbox',
    templateUrl: './toolbox.component.html',
    styleUrls  : ['./toolbox.component.scss'],
})
export class ToolboxComponent implements OnInit {

    public user = 'modya';

    public users: IUser[] = [];

    public roles: { [role: string]: string } = {};

    constructor(public rbacService: NgxRbacService,
                private usersService: UsersService) { }

    ngOnInit() {
        this.users = this.usersService.list();
        this.setUser(this.users[1]);
        this.rbacService.roles$.subscribe(() => this.updateRoles());
    }

    public setUser(user: IUser) {
        this.user = user.id;
        this.rbacService.setBaseRoles(user.roles);
    }

    updateRoles() {
        const list = {};
        Object.keys(this.rbacService.allRoles).forEach(name => list[name] = 'disabled');
        Object.keys(this.rbacService.roles).forEach(name => list[name] = (this.rbacService.roles[name].base) ? 'selected' : '');
        this.roles = list;
    }
}
