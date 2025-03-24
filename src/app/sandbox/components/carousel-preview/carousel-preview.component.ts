import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  HlmCarouselComponent,
  HlmCarouselContentComponent,
  HlmCarouselItemComponent,
  HlmCarouselNextComponent,
  HlmCarouselPreviousComponent,
} from '@spartan-ng/ui-carousel-helm';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'dg-carousel-preview',
  imports: [
    HlmCarouselComponent,
    HlmCarouselContentComponent,
    HlmCarouselItemComponent,
    HlmCarouselNextComponent,
    HlmCarouselPreviousComponent,
  ],
  templateUrl: './carousel-preview.component.html',
})
export class CarouselPreviewComponent {
  items = Array.from({ length: 5 }, (_, i) => i + 1);
}
