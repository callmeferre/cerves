import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';

import { ListComponent } from './components/list/list.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailsComponent } from './components/details/details.component';
import { CervesComponent } from './components/cerves/cerves.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    ListContactComponent,
    DetailsComponent,
    CervesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
