import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './home/header/header.component';
import { MainComponent } from './home/main/main.component';
import { FooterComponent } from './home/footer/footer.component';
import { NgwWowModule } from 'ngx-wow';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgwWowModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
