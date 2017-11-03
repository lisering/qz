import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatesComponent } from './states/states.component';
import { SearchComponent } from './search/search.component';
import { StateListComponent } from './state-list/state-list.component';
import { GetAllStatesService } from './get-all-states.service';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    StatesComponent,
    SearchComponent,
    StateListComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    GetAllStatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
