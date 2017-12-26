import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';

import { EmergencyComponent } from './emergency.component';
import { EmergencyRoutingModule, routedComponents } from './emergency.routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    EmergencyRoutingModule,
  ],
  declarations: [...routedComponents],
})
export class EmergencyModule {}
