import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthLayoutComponent} from './shared/components/layouts/auth-layout/auth-layout.component';
import {AuthGaurd} from './shared/services/auth.gaurd';
import {BlankLayoutComponent} from './shared/components/layouts/blank-layout/blank-layout.component';
import {AdminLayoutSidebarCompactComponent} from './shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component';
import {AdminLayoutSidebarLargeComponent} from './shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component';
import {SpLayoutComponent} from "./shared/components/layouts/sp-layout/sp-layout.component";

const adminRoutes: Routes = [
    {
        path: 'calendar',
        loadChildren: './views/calendar/calendar.module#CalendarAppModule'
    },
    {
        path: 'hole-status',
        loadChildren: './views/hole-status/hole-status.module#HoleStatusModule'
    },
    {
        path: 'customer-list',
        loadChildren: './views/customers/customers.module#CustomersModule'
    },
    {
        path: 'cast-list',
        loadChildren: './views/casts/casts.module#CastsModule'
    },
    {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'uikits',
        loadChildren: './views/ui-kits/ui-kits.module#UiKitsModule'
    },
    {
        path: 'forms',
        loadChildren: './views/forms/forms.module#AppFormsModule'
    },
    {
        path: 'invoice',
        loadChildren: './views/invoice/invoice.module#InvoiceModule'
    },
    {
        path: 'inbox',
        loadChildren: './views/inbox/inbox.module#InboxModule'
    },
    {
        path: 'chat',
        loadChildren: './views/chat/chat.module#ChatModule'
    },
    {
        path: 'tables',
        loadChildren: './views/data-tables/data-tables.module#DataTablesModule'
    },
    {
        path: 'pages',
        loadChildren: './views/pages/pages.module#PagesModule'
    },
    {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
    }

];

const routes: Routes = [
    {
        path: '',
        redirectTo: 'calendar',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'sessions',
                loadChildren: './views/sessions/sessions.module#SessionsModule'
            }
        ]
    },
    {
        path: '',
        component: SpLayoutComponent,
        children: [
            {
                path: 'sp',
                loadChildren: './views/sp/sp.module#SpModule'
            }
        ]
    },
    {
        path: '',
        component: BlankLayoutComponent,
        children: [
            {
                path: 'others',
                loadChildren: './views/others/others.module#OthersModule'
            }
        ]
    },
    {
        path: '',
        component: AdminLayoutSidebarLargeComponent,
        canActivate: [AuthGaurd],
        children: adminRoutes
    },
    {
        path: '**',
        redirectTo: 'others/404'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
