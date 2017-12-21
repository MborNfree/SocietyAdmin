import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './property.component';
import { SocietyPropertyComponent } from './society-property/society-property.component';
import { SocietyAssetsComponent } from './society-assets/society-assets.component';


const routes: Routes = [{
  path: '',
  component: PropertyComponent,
  children: [{
    path: 'property',
    component: SocietyPropertyComponent,
  },
  {
    path: 'assets',
    component: SocietyAssetsComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PropertyRoutingModule {

}

export const routedComponents = [
  PropertyComponent,
  SocietyPropertyComponent,
  SocietyAssetsComponent,

];
