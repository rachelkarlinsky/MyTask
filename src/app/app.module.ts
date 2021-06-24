import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoticesComponent } from './notices/notices.component';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatToolbarModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeDetailsComponent } from './notice-details/notice-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticesComponent,
    NoticeDetailsComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FormsModule,
    NgxTypeaheadModule,
    Ng2SearchPipeModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
