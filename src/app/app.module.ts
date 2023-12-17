import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './component/menubar/menubar.component';
import { MaterialModule } from './material-module';
import { HomeComponent } from './component/home/home.component';
import { GrandJuryCaseComponent } from './component/grand-jury-case/grand-jury-case.component';
import { GrandJuryCaseCalanderComponent } from './component/grand-jury-case-calander/grand-jury-case-calander.component';
import { ReferenceDataManagerComponent } from './component/reference-data-manager/reference-data-manager.component';
import { UserManagerComponent } from './component/user-manager/user-manager.component';
import { NonFinancialRecordComponent } from './component/non-financial-record/non-financial-record.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    GrandJuryCaseComponent,
    GrandJuryCaseCalanderComponent,
    ReferenceDataManagerComponent,
    UserManagerComponent,
    NonFinancialRecordComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
