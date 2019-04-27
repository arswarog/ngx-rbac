import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment, UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { activatedRouteSnapshotToRootPath } from './unils';
import { NgxRbacService } from './ngx-rbac.service';

@Injectable({
    providedIn: 'root',
})
export class NgxRbacGuard implements CanActivateChild, CanActivate, CanLoad {
    constructor(private rbac: NgxRbacService,
                private router: Router) {}

    public canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return new Observable(observer => {
            if (!route.data || !route.data.roles || !Array.isArray(route.data.roles)) {
                console.warn('Module doesn\'t have roles', route);
                observer.next(true);
                return observer.complete();
            }

            if (this.rbac.is(route.data.roles)) {
                observer.next(true);
                return observer.complete();
            }

            console.error('You don\'t have access to load this module');

            // if (route.data.denyRoute) {
            // //     this.router.navigateByUrl(activatedRouteSnapshotToRootPath(route) + route.data.denyRoute);
            // } else {
            // //     this.router.navigateByUrl(activatedRouteSnapshotToRootPath(route));
            // }

            observer.next(false);
            return observer.complete();
        });
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return true;
    }

    public canActivateChild(route: ActivatedRouteSnapshot,
                            state: RouterStateSnapshot): Observable<boolean> {
        return new Observable(observer => {
            console.log('RBAC GUARD', this.rbac.roles);

            if (!route.data.roles) {
                return observer.next(true);
            }

            if (this.rbac.can(route.data.roles)) {
                return observer.next(true);
            }

            console.log('DENY TO REDIRECT');

            if (route.data.denyRoute) {
                this.router.navigateByUrl(activatedRouteSnapshotToRootPath(route) + route.data.denyRoute);
            } else {
                this.router.navigateByUrl(activatedRouteSnapshotToRootPath(route));
            }

            return observer.next(false);
        });
    }
}
