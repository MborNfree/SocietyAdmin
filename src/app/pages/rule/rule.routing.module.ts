import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RuleComponent } from './rule.component';
import { AddRuleComponent } from './add-rule/add-rule.component';
import { RulesComponent } from './rules/rules.component';


const routes: Routes = [{
  path: '',
  component: RuleComponent,
  children: [{
    path: 'add-rule',
    component: AddRuleComponent,
  },
  {
    path: 'rules',
    component: RulesComponent,
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
export class RuleRoutingModule {

}

export const routedComponents = [
  RuleComponent,
  AddRuleComponent,
  RulesComponent,

];
