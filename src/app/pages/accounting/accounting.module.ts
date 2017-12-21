import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountingComponent } from './accounting.component';
import { Accountingrouting } from './accounting.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Accountingrouting
  ],
  declarations: [
    AccountingComponent
  ]
})
export class AccountingModule {}
