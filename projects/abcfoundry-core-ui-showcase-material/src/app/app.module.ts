import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxAbcfoundryCoreFormMaterialModule} from 'ngx-abcfoundry-core-form-material';
import {NgxAbcfoundryCoreStructureMaterialModule} from 'ngx-abcfoundry-core-structure-material';
import { ButtonPage1Component } from './form/buttons/button-page1/button-page1.component';
import { ButtonPage2Component } from './form/buttons/button-page2/button-page2.component';
import { ButtonPage3Component } from './form/buttons/button-page3/button-page3.component';
import { ButtonPage4Component } from './form/buttons/button-page4/button-page4.component';
import { ButtonPage5Component } from './form/buttons/button-page5/button-page5.component';
import { InputPage1Component } from './form/inputs/input-page1/input-page1.component';
import { InputPage2Component } from './form/inputs/input-page2/input-page2.component';
import { InputPage3Component } from './form/inputs/input-page3/input-page3.component';
import { InputPage4Component } from './form/inputs/input-page4/input-page4.component';
import { InputPage5Component } from './form/inputs/input-page5/input-page5.component';
import { LayoutPage1Component } from './structure/layout/layout-page1/layout-page1.component';
import { LayoutPage2Component } from './structure/layout/layout-page2/layout-page2.component';
import { LayoutPage3Component } from './structure/layout/layout-page3/layout-page3.component';
import { LayoutPage4Component } from './structure/layout/layout-page4/layout-page4.component';
import { LayoutPage5Component } from './structure/layout/layout-page5/layout-page5.component';
import { ElementPage1Component } from './structure/elements/element-page1/element-page1.component';
import { ElementPage2Component } from './structure/elements/element-page2/element-page2.component';
import { ElementPage3Component } from './structure/elements/element-page3/element-page3.component';
import { ElementPage4Component } from './structure/elements/element-page4/element-page4.component';
import { ElementPage5Component } from './structure/elements/element-page5/element-page5.component';
import { ShowcaseHomeComponent } from './showcase/showcase-home/showcase-home.component';
import { SidenavComponent } from './showcase/sidenav/sidenav.component';
import { ShowheaderComponent } from './showcase/showheader/showheader.component';
import { ShowfooterComponent } from './showcase/showfooter/showfooter.component';
import { ShowheadertopComponent } from './showcase/showheadertop/showheadertop.component';




@NgModule({
  declarations: [
    AppComponent,
    ButtonPage1Component,
    ButtonPage2Component,
    ButtonPage3Component,
    ButtonPage4Component,
    ButtonPage5Component,
    InputPage1Component,
    InputPage2Component,
    InputPage3Component,
    InputPage4Component,
    InputPage5Component,
    LayoutPage1Component,
    LayoutPage2Component,
    LayoutPage3Component,
    LayoutPage4Component,
    LayoutPage5Component,
    ElementPage1Component,
    ElementPage2Component,
    ElementPage3Component,
    ElementPage4Component,
    ElementPage5Component,
    ShowcaseHomeComponent,
    SidenavComponent,
    ShowheaderComponent,
    ShowfooterComponent,
    ShowheadertopComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAbcfoundryCoreFormMaterialModule,
    NgxAbcfoundryCoreStructureMaterialModule
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
