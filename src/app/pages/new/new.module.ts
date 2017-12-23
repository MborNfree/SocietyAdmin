import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ThemeModule } from '../../@theme/theme.module';
import { NewRoutingModule, routedComponents } from './new-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { SmartTableComponent } from './smart-table/smart-table.component';

import { NewComponent } from './new.component';

import { Routes , RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    NewRoutingModule,
    Ng2SmartTableModule,

  ],
  providers: [
    SmartTableService,
  ],
  declarations: [
    ...routedComponents,
  ],
  exports: [RouterModule],
})
export class NewModule {}
