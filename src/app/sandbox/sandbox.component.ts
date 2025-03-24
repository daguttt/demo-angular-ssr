import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CarouselPreviewComponent } from './components/carousel-preview/carousel-preview.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'dg-sandbox',
  imports: [CarouselPreviewComponent],
  template: `
    <h2 class="text-3xl">Sandbox</h2>
    <p class="text-lg mt-6 text-center">
      What do you think of this carousel component? 😜
    </p>
    <dg-carousel-preview />
  `,
  host: {
    class: 'container block py-6',
  },
})
export class SandboxPageComponent {}
