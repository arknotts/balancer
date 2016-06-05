import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { BalancerAppComponent, environment } from './app/';
import { EntryService, InMemoryEntryService, APIEntryService } from './app/entry.service';
import { HTTP_BINDINGS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(BalancerAppComponent, [
  provide(EntryService, {useClass: APIEntryService}),
  HTTP_BINDINGS
]);
