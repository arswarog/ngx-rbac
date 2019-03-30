import { ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { NgxRbacComponent } from './ngx-rbac.component';
import { AccessibleComponent } from './accessible/accessible.component';
import { RouterModule } from '@angular/router';
import { NgxRbacService, NgxRbacServiceConfig } from './ngx-rbac.service';
import { RbacGuard } from './rbac.guard';
import { RbacConfig, RbacRules } from './rbac.interface';

@NgModule({
    imports     : [
        RouterModule,
    ],
    declarations: [
        NgxRbacComponent,
        AccessibleComponent,
    ],
    exports     : [
        NgxRbacComponent,
        AccessibleComponent,
    ],
})
export class NgxRbacModule {
    static forRoot(rules: RbacRules = {},
                   config: RbacConfig = {}): ModuleWithProviders {
        return {
            ngModule : NgxRbacModule,
            providers: [
                {provide: 'rules', useValue: rules},
                {provide: 'config', useValue: config},
                NgxRbacService,
                RbacGuard,
            ],
        };
    }

    static forChild(): ModuleWithProviders {
        return {
            ngModule : NgxRbacModule,
            providers: [
                // {provide: 'rules', useValue: rules},
                // {provide: 'config', useValue: config},
                // NgxRbacService,
                RbacGuard,
            ],
        };
    }
}

