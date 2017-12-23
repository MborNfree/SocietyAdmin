import { Routes, RouterModule } from '@angular/router';

import { EmergencyComponent } from './emergency.component';

const routes: Routes = [
  {
    path: '',
    component: EmergencyComponent,
  },
];

export const Emergencyrouting = RouterModule.forChild(routes);
