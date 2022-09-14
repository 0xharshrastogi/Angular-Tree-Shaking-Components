import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModsRoutingModule } from './mods-routing.module';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [ModsHomeComponent, ModalComponent, AccordionComponent],
  imports: [CommonModule, ModsRoutingModule, SharedModule],
  exports: [ModsHomeComponent],
})
export class ModsModule {}
