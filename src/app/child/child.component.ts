import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dg-child',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <p>child works!</p> `,
  styles: ``,
})
export class ChildComponent {}
