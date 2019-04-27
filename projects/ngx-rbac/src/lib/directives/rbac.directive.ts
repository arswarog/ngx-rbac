import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NgxRbacService } from '../ngx-rbac.service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Directive({
    selector: '[ngxRbac]',
})
export class RbacDirective implements OnChanges, OnInit, OnDestroy {
    constructor(private el: ElementRef<HTMLElement>,
                private service: NgxRbacService) {
    }

    private subscription: Subscription;

    @Input('ngxRbac') rule: string;

    @Input('ngxRbacClass') class = {
        allow: 'rbac-allow',
        deny : 'rbac-deny',
    };

    ngOnInit(): void {
        this.subscription = this.service.roles$
            .pipe(
                tap(console.warn),
            )
            .subscribe(() => this.update());
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(`ngxRbacClass "${this.rule}"`, this.class);
        this.update();
    }

    update() {
        console.log(this.service.roles, this.class);
        if (this.service.can(this.rule)) {
            console.log('allow');
            if (this.class.deny) {
                this.el.nativeElement.classList.remove(this.class.deny || '');
            }
            if (this.class.allow) {
                this.el.nativeElement.classList.add(this.class.allow || '');
            }
        } else {
            console.log('deny');
            if (this.class.allow) {
                this.el.nativeElement.classList.remove(this.class.allow || '');
            }
            if (this.class.deny) {
                this.el.nativeElement.classList.add(this.class.deny || '');
            }
        }
    }
}
