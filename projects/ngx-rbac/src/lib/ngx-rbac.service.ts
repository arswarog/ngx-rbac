import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RbacConfig, RbacRule, RbacRules } from './rbac.interface';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class NgxRbacService {
    /**
     * List of current roles
     */
    public roles: Readonly<RbacRules> = {};
    /**
     * List of current roles
     */
    public roles$: Observable<RbacRules> = new BehaviorSubject<RbacRules>({});
    /**
     * List of all available roles
     */
    public allRoles: Readonly<RbacRules> = {};

    constructor(@Inject('rules') private rules: RbacRules,
                @Inject('config') private config: RbacConfig,
                // @Inject('ROUTES') routes,
    ) {
        setInterval(() => console.log(this.rules), 5000);
        setTimeout(() => console.log(this.rules), 1000);
        // console.log('ROUTES', routes);

        console.log('SERVICE', rules, config);

        this.registerRules(rules);

        this.can = this.can.bind(this);

        this.setBaseRoles(config.defaultRoles || ['default']);

        console.log('INIT RBAC', rules, config);
    }

    private nextRoles(roles: RbacRules) {
        this.roles = roles;
        console.warn('ROLES', this.roles);
        (<BehaviorSubject<RbacRules>>this.roles$).next(roles);
    }

    public getBaseRoles(): string[] {
        return Object.keys(this.roles).filter(
            role => this.roles[role].base,
        );
    }

    public setBaseRoles(roles: string[], data?: any): void {
        this.roles = {};
        this.addBaseRoles(roles, data);
    }

    public addBaseRoles(roles: string[], data?: any): void {
        const rules: RbacRules = {...this.roles};
        roles.forEach(role => {
            this.setRole(rules, role, data);
            rules[role].base = true;
        });

        this.nextRoles(Object.freeze(rules));
    }

    public registerRules(rules: RbacRules) {
        console.log(rules);
        console.log(this.allRoles);
        const allRoles = {...this.allRoles};
        Object.keys(rules).forEach(rule => this.registerRule(allRoles, rule, rules[rule]));
        this.allRoles = Object.freeze(allRoles);
        this.setBaseRoles(this.getBaseRoles());
    }

    private registerRule(rules: RbacRules, name: string, rule: RbacRule) {
        rules[name] = rule;
        if (rule.children) {
            rule.children.forEach(item => {
                if (!(item in rules)) {
                    rules[item] = {};
                }
            });
        }
    }

    private setRole(rules: RbacRules, role: string, data?: any): void {
        rules[role] = {};
        if (this.rules[role]) {
            if (this.rules[role].children) {
                this.rules[role].children.forEach(item => this.setRole(rules, item, data));
            }
        }
    }

    public is(rolesToCheck: string | string[]): boolean {
        const toCheck = Array.isArray(rolesToCheck) ? rolesToCheck : [rolesToCheck];

        console.log('check', toCheck, toCheck.some(
            role => {
                const rule = this.roles[role];

                return !!rule;
            },
        ));
        return toCheck.some(
            role => {
                const rule = this.roles[role];

                return !!rule;
            },
        );
    }

    public can(rolesToCheck: string, data?: any): boolean {
        const toCheck = Array.isArray(rolesToCheck) ? rolesToCheck : [rolesToCheck];

        return toCheck.some(
            role => {
                const rule = this.roles[role];

                return !!rule;
            },
        );
    }

    public canAll(rolesToCheck: string[], data?: any): boolean {
        const toCheck = Array.isArray(rolesToCheck) ? rolesToCheck : [rolesToCheck];

        return toCheck.every(
            role => {
                const rule = this.roles[role];

                return !!rule;
            },
        );
    }

    public canSome(rolesToCheck: string[], data?: any): boolean {
        const toCheck = Array.isArray(rolesToCheck) ? rolesToCheck : [rolesToCheck];

        return toCheck.some(
            role => {
                const rule = this.roles[role];

                return !!rule;
            },
        );
    }
}

// export class NgxRbacServiceConfig extends NgxRbacService {
//     defaultRoles?: string[];
// }
