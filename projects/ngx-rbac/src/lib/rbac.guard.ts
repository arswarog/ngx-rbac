import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { activatedRouteSnapshotToRootPath } from './unils';
import { NgxRbacService } from './ngx-rbac.service';

@Injectable({
    providedIn: 'root',
})
export class RbacGuard implements CanActivateChild {
    constructor(private rbac: NgxRbacService,
                private router: Router) {}

    public canActivateChild(route: ActivatedRouteSnapshot,
                            state: RouterStateSnapshot): Observable<boolean> {
        return new Observable(observer => {
            console.log('RBAC GUARD', this.rbac.roles);

            if (!route.data.roles)
                return observer.next(true);

            if (this.rbac.can(route.data.roles))
                return observer.next(true);

            console.log('DENY TO REDIRECT');

            if (route.data.denyRoute)
                this.router.navigateByUrl(activatedRouteSnapshotToRootPath(route) + route.data.denyRoute);
            else
                this.router.navigateByUrl(activatedRouteSnapshotToRootPath(route));

            return observer.next(false);
        });
    }
}
