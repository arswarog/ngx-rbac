import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxRbacService } from '../ngx-rbac.service';

@Directive({
    selector: '[ngxRbac]',
})
export class RbacClassDirective implements OnChanges {

    constructor(private el: ElementRef,
                private service: NgxRbacService) { }

    @Input() ngxRbacClass: {};

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngxRbacClass', this.ngxRbacClass);
    }
}
