
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DocumentsComponent } from './documents.component';
import { DocsRoutingModule, routedComponents } from './documents.routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DocsRoutingModule,
  ],
  declarations: [
    routedComponents,

  ],
})
export class DocumentsModule {}
