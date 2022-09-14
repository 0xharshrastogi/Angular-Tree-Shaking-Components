import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    BiographyComponent,
    PartnersComponent,
    CompaniesComponent,
    TabsComponent,
  ],
  imports: [CommonModule, CollectionsRoutingModule, SharedModule],
  exports: [CollectionsHomeComponent],
})
export class CollectionsModule {}
