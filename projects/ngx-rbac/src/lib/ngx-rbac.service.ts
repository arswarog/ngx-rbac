import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RbacConfig, RbacRule, RbacRules } from './rbac.interface';
import { Config } from './tokens';

@Injectable({
    providedIn: 'root',
})
export class NgxRbacService {
    /**
     * List of current roles
     */
    public roles: Readonly<RbacRules>    = {};
    /**
     * List of current roles
     */
    public roles$: Observable<RbacRules> = new BehaviorSubject<RbacRules>({});
    /**
     * List of all available roles
     */
    public allRoles: Readonly<RbacRules> = {};

    private rules: RbacRules = {};

    constructor(@Inject(Config) private config: RbacConfig) {
        this.can = this.can.bind(this);
        if (this.config.debug) {
            console.group('[NgxRbac] initialization');
            console.log('Config:', config);
            console.groupEnd();

        }
        this.setBaseRoles(config.defaultRoles || ['default']);
    }

    private nextRoles(roles: RbacRules) {
        this.roles = roles;
        (<BehaviorSubject<RbacRules>>this.roles$).next(roles);
    }

    public getBaseRoles(): string[] {
        return Object.keys(this.roles).filter(
            role => this.roles[role].base,
        );
    }

    public setBaseRoles(roles: string[], data?: any, method = 'set'): void {
        this.roles = {};
        this.addBaseRoles(roles, data, method);
    }

    public addBaseRoles(roles: string[], data?: any, method = 'add'): void {
        if (this.config.debug)
            console.group(`[NgxRbac] ${method} base roles: ${roles.join(', ')}`);
        const rules: RbacRules = {...this.roles};
        roles.forEach(role => {
            this.setRole(rules, role, data);
            rules[role].base = true;
        });
        if (this.config.debug)
            console.groupEnd();
        this.nextRoles(Object.freeze(rules));
    }

    public registerRules(rules: RbacRules, section?: string) {
        const allRoles = {...this.allRoles};
        Object.keys(rules).forEach(rule => {
            if (!section)
                this.registerRule(allRoles, rule, rules[rule], section);
            else if (rule === section) {
                if (this.config.debug)
                    console.log(`Info: Prefix "${section}" doesn\'t append because rule name equal section name`);
                this.registerRule(allRoles, rule, rules[rule], section);
            } else
                this.registerRule(allRoles, section + '.' + rule, rules[rule], section);
        });
        this.allRoles = Object.freeze(allRoles);
        this.setBaseRoles(this.getBaseRoles(), null, 'update');
    }

    private registerRule(rules: RbacRules, name: string, rule: RbacRule, by?: string) {
        if (name in rules) {
            if (!rules[name].children)
                rules[name].children = [];
            Object.assign(
                rules[name],
                {
                    ...rule,
                    children: [
                        ...rules[name].children,
                        ...rule.children ? rule.children : [],
                    ],
                },
            );
        } else {
            if (this.config.debug)
                console.log(`Register rule "${name}"` + (by ? ` by "${by}"` : ''));
            rules[name] = rule;
        }
        if (rule.children) {
            rule.children.forEach(item => {
                if (this.config.debug)
                    console.log(`Register rule "${item}" by "${name}"`);
                if (!(item in rules)) {
                    rules[item] = {};
                }
            });
        }
    }

    private setRole(rules: RbacRules, role: string, data?: any, by?: string): void {
        if (this.config.debug)
            console.log(`Add role "${role}"` + (by ? ` by "${by}"` : '') + (role in this.allRoles ? '' : ` (role doesn\'t exists)`));

        rules[role] = {};
        if (this.allRoles[role]) {
            if (this.allRoles[role].children) {
                this.allRoles[role].children.forEach(item => this.setRole(rules, item, data, role));
            }
        }
    }

    public is(rolesToCheck: string | string[]): boolean {
        const toCheck = Array.isArray(rolesToCheck) ? rolesToCheck : [rolesToCheck];

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
