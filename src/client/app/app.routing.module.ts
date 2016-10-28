import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule,Route} from '@angular/router';

import {BookListComponent} from './book-list/book-list.component';

const appRoutes: Route[] = [
    {path: '', redirectTo: 'book-list', pathMatch: 'full'},
    {path: 'book-list', component: BookListComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);