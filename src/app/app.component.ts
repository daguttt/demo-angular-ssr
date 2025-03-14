import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmH1Directive } from '@spartan-ng/ui-typography-helm';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'dg-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HlmH1Directive, HlmButtonDirective, ChildComponent],
  templateUrl: './app.component.html',
  styles: ``,
})
export class AppComponent {
  readonly state = signal({ count: 0 });

  onHelloWorldClick() {
    console.log('Hello world!');
  }
}
