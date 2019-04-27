import { Injectable } from '@angular/core';
import { IUser } from './users.interface';
import { demoUsers } from './users';

@Injectable({
    providedIn: 'root',
})
export class UsersService {

    private users: IUser[];

    constructor() {
        this.users = demoUsers;
    }

    public list() {
        return this.users;
    }
}
