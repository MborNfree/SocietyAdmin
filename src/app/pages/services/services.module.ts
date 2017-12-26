import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';

import { ServiceRoutingModule, routedComponents} from './services.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    ServiceRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ServicesModule {}
