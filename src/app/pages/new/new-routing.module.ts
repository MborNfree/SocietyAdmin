import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComponent } from './new.component';
import { SmartTableComponent } from './smart-table/smart-table.component';

const routes: Routes = [{
  path: '',
  component: NewComponent,
  children: [{
    path: 'smart-table1',
    component: SmartTableComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRoutingModule { }

export const routedComponents = [
  NewComponent,
  SmartTableComponent,
];
