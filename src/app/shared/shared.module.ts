import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DividerComponent } from './divider/divider.component';
import { HideAfterDirective } from './hide-after.directive';

@NgModule({
  declarations: [DividerComponent, HideAfterDirective],
  imports: [CommonModule],
  exports: [DividerComponent, HideAfterDirective],
})
export class SharedModule {}
