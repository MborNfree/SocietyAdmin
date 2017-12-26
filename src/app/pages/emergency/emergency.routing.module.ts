
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergencyComponent } from './emergency.component';
import { EmergencyListComponent } from './emergency-list/emergency-list.component';
import { AddEmergencyComponent } from './add-emergency/add-emergency.component';

const routes: Routes = [{
  path: '',
  component: EmergencyComponent,
  children: [{
    path: 'add-emergency',
    component: AddEmergencyComponent,
  },
  {
    path: 'emergency-list',
    component: EmergencyListComponent,
  },
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergencyRoutingModule { }

export const routedComponents = [
  EmergencyComponent,
  AddEmergencyComponent,
  EmergencyListComponent,

];
