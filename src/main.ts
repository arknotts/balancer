import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { BalancerAppComponent, environment } from './app/';
import { EntryService, InMemoryEntryService } from './app/entry.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(BalancerAppComponent, [
  provide(EntryService, {
    useFactory: () => new InMemoryEntryService()
  })
]);
