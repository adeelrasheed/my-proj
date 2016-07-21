import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">All</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active">Missed</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active">Forwarded</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active">Answer</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService
  ]
})
export class AppComponent {
  title = 'Group call log';
}



