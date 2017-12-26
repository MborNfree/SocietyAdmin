import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';

import { PropertyRoutingModule, routedComponents } from './property.routing.module';


@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    ThemeModule,
    PropertyRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class PropertyModule {}
