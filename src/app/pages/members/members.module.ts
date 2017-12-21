import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { ThemeModule } from '../../@theme/theme.module';

import { MembersRoutingModule, routedComponents } from './members.routing.module';
import { ResidentsBarComponent } from './residents/residents-bar.component';
import { ResidentsLineComponent } from './residents/residents-line.component';
import { ResidentsPieComponent } from './residents/residents-pie.component';
import { ResidentsMultipleXaxisComponent } from './residents/residents-multiple-xaxis.component';
import { ResidentsBarHorizontalComponent } from './residents/residents-bar-horizontal.component';
import { ResidentsRadarComponent } from './residents/residents-radar.component';
import { CommitteeBarComponent } from './committee/committee-bar.component';
import { CommitteeLineComponent } from './committee/committee-line.component';
import { CommitteePieComponent } from './committee/committee-pie.component';
import { CommitteeMultipleXaxisComponent } from './committee/committee-multiple-xaxis.component';
import { CommitteeBarHorizontalComponent } from './committee/committee-bar-horizontal.component';
import { CommitteeRadarComponent } from './committee/committee-radar.component';

const components = [
  ResidentsBarComponent,
  ResidentsLineComponent,
  ResidentsPieComponent,
  ResidentsMultipleXaxisComponent,
  ResidentsBarHorizontalComponent,
  ResidentsRadarComponent,
  CommitteeBarComponent,
  CommitteeLineComponent,
  CommitteePieComponent,
  CommitteeMultipleXaxisComponent,
  CommitteeBarHorizontalComponent,
  CommitteeRadarComponent,

];

@NgModule({
  imports: [ThemeModule, MembersRoutingModule, AngularEchartsModule, NgxChartsModule, ChartModule],
  declarations: [...routedComponents, ...components],
})
export class MembersModule {}
