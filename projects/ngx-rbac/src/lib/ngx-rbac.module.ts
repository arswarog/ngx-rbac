import { Inject, InjectionToken, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { NgxRbacComponent } from './ngx-rbac.component';
import { AccessibleComponent } from './accessible/accessible.component';
import { RouterModule } from '@angular/router';
import { NgxRbacService } from './ngx-rbac.service';
import { NgxRbacGuard } from './rbac.guard';
import { RbacConfig, RbacRules } from './rbac.interface';
import { RbacDirective } from './directives/rbac.directive';

export interface Route {
    name: string;
}

export const ROUTES = new InjectionToken<Route[][]>('ROUTES');


// let NB_INSTANCES = 0;
//
// export const UNIQUE_ID = new InjectionToken<string>("UNIQUE_ID");
//
// export const UNIQUE_ID_PROVIDER = {
//     provide: UNIQUE_ID,
//     useFactory: () => "my-unique-id-" + (NB_INSTANCES++)
// };

@NgModule({
    imports     : [
        RouterModule,
    ],
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
    static forRoot(rules: RbacRules = {},
                   config: RbacConfig = {}): ModuleWithProviders {
        return {
            ngModule : NgxRbacModule,
            providers: [
                // {provide: 'rules', useValue: rules, multi: true},
                // {provide: 'config', useValue: config},
                rbacServiceFactory(rules, config),
                // NgxRbacService,
                NgxRbacGuard,
            ],
        };
    }

    static forChild(section: string, rules: RbacRules): ModuleWithProviders {
        return {
            ngModule : NgxRbacModule,
            providers: [
                rbacServiceFactory(rules, {}),
                // {provide: 'section', useValue: section},
                // {provide: 'rules', useValue: rules, multi: true},
                // NgxRbacService,
                NgxRbacGuard,
            ],
        };
    }
}

let rbacService: NgxRbacService = null;

export function rbacServiceFactory(rules: RbacRules, config: RbacConfig) {
    console.log('new rbac service', rules, config);
    if (rbacService) {
        console.log('add rules');
        rbacService.registerRules(rules);
    } else {
        rbacService = new NgxRbacService(rules, config);
    }
    console.log('all roles', rbacService.allRoles);
    return [{
        provide : NgxRbacService,
        // useFactory: () => rbacService,
        useValue: rbacService,
        // useValue: new NgxRbacService(rules, config)
    }];
}
