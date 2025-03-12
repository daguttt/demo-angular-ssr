import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmH1Directive } from '@spartan-ng/ui-typography-helm';

@Component({
  selector: 'dg-root',
  imports: [RouterOutlet, HlmH1Directive, HlmButtonDirective],
  template: `
    @defer (hydrate never) {
      <h1 hlmH1 class="text-blue-500">Hello world!</h1>
      <button hlmBtn variant="secondary" size="lg">Hello world!</button>
    }

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {}
