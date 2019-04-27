import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { NgxRbacComponent } from './ngx-rbac.component';
import { AccessibleComponent } from './accessible/accessible.component';
import { NgxRbacService } from './ngx-rbac.service';
import { NgxRbacGuard } from './rbac.guard';
import { RbacConfig, RbacRules } from './rbac.interface';
import { RbacDirective } from './directives/rbac.directive';
import { Config, Rules, Section } from './tokens';

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
                @Inject(Rules) rules: RbacRules[],
                @Inject(Config) config: RbacConfig,
                @Inject(Section) @Optional() section: string) {
        if (config.debug) {
            console.group('[NgxRbac] Load rules' + (section ? ` for section "${section}"` : ''));
            rules.forEach(rule => rbac.registerRules(rule, section));
            console.groupEnd();
        } else
            rules.forEach(rule => rbac.registerRules(rule, section));
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

    static forChild(rules: RbacRules, section?: string): ModuleWithProviders {
        return {
            ngModule : NgxRbacModule,
            providers: [
                {provide: Rules, useValue: rules, multi: true},
                {provide: Section, useValue: section},
            ],
        };
    }
}
