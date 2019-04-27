import { IUser } from './users.interface';

export const demoUsers: IUser[] = [
    {
        id   : 'admin',
        name : 'Admin vseya Rusi',
        roles: ['admin'],
    },
    {
        id   : 'modya',
        name : 'I am groot!',
        roles: ['moderator'],
    },
    {
        id   : 'vasya',
        name : 'Skromny user',
        roles: ['user'],
    },
];
