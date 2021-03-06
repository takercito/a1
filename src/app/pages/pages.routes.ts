import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'progress', component: ProgressComponent},
            { path: 'graficas1', component: Graficas1Component},
            { path: 'dashboard', component: DashboardComponent},
        ]

    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
