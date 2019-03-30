import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RbacConfig, RbacRules } from './rbac.interface';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class NgxRbacService {
    private observer$ = new BehaviorSubject<RbacRules>({});
    public roles: Readonly<RbacRules> = {};
    public roles$: Observable<RbacRules>;

    constructor(@Inject('rules') private rules: RbacRules,
                @Inject('config') private config: RbacConfig) {
        this.can = this.can.bind(this);

        this.setBaseRoles(config.defaultRoles || ['default']);

        this.roles$ = this.observer$.pipe(
            distinctUntilChanged(),
        );

        console.log('INIT RBAC', rules, config);
        this.roles$.subscribe(
            roles => console.warn('ROLES', roles),
        );
    }

    public setBaseRoles(roles: string[], data?: any): void {
        const rules: RbacRules = {};

        roles.forEach(role => {
            // rules[role] = {base: true};
            this.setRole(rules, role, data);
        });

        this.roles = Object.freeze(rules);
    }

    private setRole(rules: RbacRules, role: string, data?: any): void {
        rules[role] = {};
        if (this.rules[role]) {
            if (this.rules[role].children)
                this.rules[role].children.forEach(item => this.setRole(rules, item, data));
        }
    }

    public can(rolesToCheck: string | string[], data?: any): boolean {
        const toCheck = Array.isArray(rolesToCheck) ? rolesToCheck : [rolesToCheck];

        return toCheck.some(
            role => {
                const rule = this.roles[role];

                return !!rule;
            },
        );
    }
}

export class NgxRbacServiceConfig extends NgxRbacService {

}
