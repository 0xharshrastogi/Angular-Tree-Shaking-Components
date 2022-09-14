import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewsRoutingModule } from './views-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [ViewHomeComponent, StatisticsComponent, ItemListComponent],
  imports: [CommonModule, ViewsRoutingModule, SharedModule],
  exports: [ViewHomeComponent],
})
export class ViewsModule {}
