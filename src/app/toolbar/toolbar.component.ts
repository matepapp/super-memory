import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'super-memory-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  logo = require('../../assets/logo.svg');
  title = 'SUPER MEMORY GAME';
  compact$: Observable<boolean>;

  navigation = [
    { link: '/high-scores', label: 'High Scores' },
    { link: '/game', label: 'Start New Game' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.compact$ = this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      map((event: ActivationEnd) => event.snapshot.routeConfig.path === 'welcome'),
    );
  }
}
