import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ElementHomeComponent } from './element-home/element-home.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { RepeatDirective } from './repeat.directive';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  declarations: [ElementHomeComponent, PlaceholderComponent, RepeatDirective, SegmentComponent],
  imports: [CommonModule, ElementsRoutingModule, SharedModule],

  exports: [ElementHomeComponent],
})
export class ElementsModule {}
