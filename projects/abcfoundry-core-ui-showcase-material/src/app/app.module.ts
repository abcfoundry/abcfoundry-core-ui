import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxAbcfoundryCoreFormMaterialModule} from 'ngx-abcfoundry-core-form-material';
import {NgxAbcfoundryCoreStructureMaterialModule} from 'ngx-abcfoundry-core-structure-material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAbcfoundryCoreFormMaterialModule,
    NgxAbcfoundryCoreStructureMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
