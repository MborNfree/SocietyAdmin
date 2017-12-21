
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DocumentsComponent } from './documents.component';
import { AddDocComponent } from './add-doc/add-doc.component';
import { DocsComponent } from './docs/docs.component';

const routes: Routes = [{
  path: '',
  component: DocumentsComponent,
  children: [{
    path: 'add-doc',
    component: AddDocComponent,
  },
  {
    path: 'docs',
    component: DocsComponent,
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
export class DocsRoutingModule {

}

export const routedComponents = [
  DocumentsComponent,
  AddDocComponent,
  DocsComponent,

];
