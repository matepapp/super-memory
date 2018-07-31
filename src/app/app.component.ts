import { Title } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

import { AnimationsService, routeAnimations} from '@app/core';
import { environment as env } from '@env/environment';

@Component({
  selector: 'super-memory-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    public overlayContainer: OverlayContainer,
    private store: Store<any>,
    private router: Router,
    private titleService: Title,
    private animationService: AnimationsService
  ) {}

  ngOnInit(): void {
    this.subscribeToRouterEvents();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private subscribeToRouterEvents() {
    this.router.events
      .pipe(
        filter(
          event =>
            event instanceof ActivationEnd || event instanceof NavigationEnd
        ),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(event => {
        if (event instanceof ActivationEnd) {
          console.log(event);
          this.setPageTitle(event);
        }
      });
  }

  private setPageTitle(event: ActivationEnd) {
    let lastChild = event.snapshot;
    while (lastChild.children.length) {
      lastChild = lastChild.children[0];
    }
    const { title } = lastChild.data;
    this.titleService.setTitle(
      title ? `${title} - ${env.appName}` : env.appName
    );
  }
}
