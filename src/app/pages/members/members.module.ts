import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AngularEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { ThemeModule } from '../../@theme/theme.module';
import { SmartTableService } from '../../@core/data/smart-table.service';

import { MembersRoutingModule, routedComponents } from './members.routing.module';

@NgModule({
  imports: [ThemeModule, MembersRoutingModule, AngularEchartsModule, NgxChartsModule, ChartModule, Ng2SmartTableModule],
  declarations: [...routedComponents],
  providers: [
    SmartTableService,
  ],
})
export class MembersModule {}
