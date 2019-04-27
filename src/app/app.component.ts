import { Component } from '@angular/core';
import { NgxRbacService } from 'ngx-rbac';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
})
export class AppComponent {
    title = 'ngx-rbac-demo';

    constructor(public rbac: NgxRbacService) {
        console.log(rbac);
        this.rbac.setBaseRoles(['admin']);
    }
}
