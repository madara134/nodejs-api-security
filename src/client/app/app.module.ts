import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {routing} from './app.routing.module';
import {AppComponent} from './app.component';
import {BookListComponent} from './book-list/book-list.component';

@NgModule({
    imports: [BrowserModule,routing],
    declarations: [AppComponent,BookListComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}