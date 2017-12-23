import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmergencyComponent } from './emergency.component';
import { Emergencyrouting } from './emergency.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Emergencyrouting,
  ],
  declarations: [
    EmergencyComponent,

  ],
})
export class EmergencyModule {}
