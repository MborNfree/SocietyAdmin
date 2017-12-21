import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersComponent } from './members.component';

import { ResidentsComponent } from './residents/residents.component';
import { CommitteeComponent } from './committee/committee.component';


const routes: Routes = [{
  path: '',
  component: MembersComponent,
  children: [{
    path: 'residents',
    component: ResidentsComponent,
  },
  {
    path: 'committee',
    component: CommitteeComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersRoutingModule { }

export const routedComponents = [
  MembersComponent,
  ResidentsComponent,
  CommitteeComponent,
];
