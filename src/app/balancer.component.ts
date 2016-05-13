import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { EntryListComponent } from './+entry-list';

@Component({
  moduleId: module.id,
  selector: 'balancer-app',
  templateUrl: 'balancer.component.html',
  styleUrls: ['balancer.component.css'],
  directives: [ROUTER_DIRECTIVES, EntryListComponent],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/entry-list', component: EntryListComponent}
])
export class BalancerAppComponent {
  title = 'balancer works!';
}
