import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatesComponent } from './states/states.component';
import { SearchComponent } from './search/search.component';
import { StateListComponent } from './state-list/state-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StatesComponent,
    SearchComponent,
    StateListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
