import { Routes } from '@angular/router';

import { DashboardComponent } from '../../views/dashboard/dashboard.component';
import { SettingsComponent } from '../../views/settings/settings.component';
import { ChartDetailsComponent } from '../../views/chart-details/chart-details.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'chart-details/:id', component: ChartDetailsComponent },
    // { path: 'settings', component: SettingsComponent },
];
