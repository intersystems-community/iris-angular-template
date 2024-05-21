import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { HomeComponent } from './core/components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './core/components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BASE_PATH } from './generated';
import { HeaderComponent } from './shared/header/header.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: BASE_PATH, useValue: 'api' },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
