import { NgModule } from '../../../node_modules/@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { PAGES_ROUTES } from './pages.routes';



@NgModule({
    declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent,
    PagesComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        PAGES_ROUTES
    ]
})

export class PagesModule {}
