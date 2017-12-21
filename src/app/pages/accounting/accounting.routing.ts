import { Routes, RouterModule } from '@angular/router';

import { AccountingComponent } from './accounting.component';

const routes: Routes = [
  {
    path: '',
    component: AccountingComponent
  }
];

export const Accountingrouting = RouterModule.forChild(routes);
