
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RuleRoutingModule , routedComponents } from './rule.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RuleRoutingModule,

  ],
  declarations: [
    routedComponents,

  ],
})
export class RuleModule {}
