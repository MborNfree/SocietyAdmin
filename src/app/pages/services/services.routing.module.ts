import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { ServiceListComponent } from './service-list/service-listcomponent';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [{
      path: 'add-services',
      component: AddServiceComponent,
    },
    {
      path: 'service-list',
      component: ServiceListComponent,
    },
   ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ServiceRoutingModule {

}

export const routedComponents = [
  ServicesComponent,
  AddServiceComponent,
  ServiceListComponent,
];

