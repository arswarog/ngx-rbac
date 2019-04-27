import { Component, OnInit } from '@angular/core';
import { NgxRbacService } from 'ngx-rbac';

@Component({
    selector   : 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls  : ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

    constructor(private rbac: NgxRbacService) { }

    ngOnInit() {
        console.log('admin rbac', this.rbac);
    }
}
