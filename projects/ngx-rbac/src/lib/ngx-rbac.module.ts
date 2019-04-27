import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { NgxRbacComponent } from './ngx-rbac.component';
import { AccessibleComponent } from './accessible/accessible.component';
import { NgxRbacService } from './ngx-rbac.service';
import { NgxRbacGuard } from './rbac.guard';
import { RbacConfig, RbacRules } from './rbac.interface';
import { RbacDirective } from './directives/rbac.directive';
import { Config, Rules } from './tokens';

@NgModule({
    imports     : [],
    declarations: [
        NgxRbacComponent,
        AccessibleComponent,
        RbacDirective,
    ],
    exports     : [
        NgxRbacComponent,
        AccessibleComponent,
        RbacDirective,
    ],
})
export class NgxRbacModule {
    constructor(private rbac: NgxRbacService,
                @Inject(Config) config: RbacConfig,
                @Inject(Rules) rules: RbacRules[]) {
        console.log('NgxRbacModule loaded.');
        console.log(rules);
        console.log(rbac);
        console.log({...rbac.allRoles});
        if (config.debug) {
            console.group('[NgxRbac] Load rules');
            rules.forEach(rule => console.log(rule));
            console.groupEnd();
        }
        rules.forEach(rule => rbac.registerRules(rule));
    }

    static forRoot(rules: RbacRules   = {},
                   config: RbacConfig = {}): ModuleWithProviders {
        return {
            ngModule : NgxRbacModule,
            providers: [
                {provide: Rules, useValue: rules, multi: true},
                {provide: Config, useValue: config},
                NgxRbacService,
                NgxRbacGuard,
            ],
        };
    }

    static forChild(section: string, rules: RbacRules): ModuleWithProviders {
        return {
            ngModule : NgxRbacModule,
            providers: [
                {provide: Rules, useValue: rules, multi: true},
                //{provide: Section, useValue: section, multi: true},
            ],
        };
    }
}
