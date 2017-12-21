import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { PropertyComponent } from './property.component';
// import { Propertyrouting } from './property.routing';
import { PropertyRoutingModule, routedComponents } from './property.routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PropertyRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class PropertyModule {}
