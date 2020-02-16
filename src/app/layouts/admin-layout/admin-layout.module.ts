import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../views/dashboard/dashboard.component';
import { SettingsComponent } from '../../views/settings/settings.component';
import { ChartComponent } from '../../components/chart/chart.component';
import { TableComponent } from '../../components/table/table.component';



import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

import { ChartsModule } from 'ng2-charts';

import { DataService } from '../../services/data.service';
import { ChartDetailsComponent } from '../../views/chart-details/chart-details.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    SettingsComponent,
    ChartComponent,
    ChartDetailsComponent,
    TableComponent
  ],
  providers: [DataService],

})

export class AdminLayoutModule {}
