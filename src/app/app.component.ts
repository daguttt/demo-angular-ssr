import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HlmH1Directive } from '@spartan-ng/ui-typography-helm';

@Component({
  selector: 'dg-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HlmH1Directive],
  templateUrl: './app.component.html',
  styles: ``,
})
export class AppComponent {}
