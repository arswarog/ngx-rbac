import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxRbacService } from '../ngx-rbac.service';
import { activatedRouteSnapshotToRootPath } from '../unils';

@Component({
    selector   : 'rbac-accessible',
    templateUrl: './accessible.component.html',
    styleUrls  : ['./accessible.component.css'],
})
export class AccessibleComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute,
                private rbac: NgxRbacService,
                private router: Router) {
    }

    ngOnInit() {
        if (this.activatedRoute.routeConfig.children)
            throw new Error('AccessibleComponent can not have children, because it can cause a lot of errors with navigation');

        const children = this.activatedRoute.parent.routeConfig.children
            .filter(route => route.component !== AccessibleComponent)
            .filter(route => route.data && this.rbac.can(route.data['roles']));
        if (children.length)
            this.router.navigateByUrl(activatedRouteSnapshotToRootPath(this.activatedRoute.snapshot) + '/' + children[0].path);
        else
            this.router.navigateByUrl('/auth/denied');
    }
}
