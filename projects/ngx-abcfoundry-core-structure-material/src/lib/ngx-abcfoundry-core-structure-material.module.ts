import { NgModule } from '@angular/core';
import { NgxAbcfoundryCoreStructureMaterialComponent } from './ngx-abcfoundry-core-structure-material.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { NavSideComponent } from './navigation/nav-side/nav-side.component';
import { NavMenuComponent } from './navigation/nav-menu/nav-menu.component';
import { NavTabsetComponent } from './navigation/nav-tabset/nav-tabset.component';
import { NavActionsComponent } from './navigation/nav-actions/nav-actions.component';
import { MainContainerComponent } from './navigation/main-container/main-container.component';
import { NavToolbarComponent } from './navigation/nav-toolbar/nav-toolbar.component';
import { HeaderTopComponent } from './navigation/header-top/header-top.component';
import { HeaderBottomComponent } from './navigation/header-bottom/header-bottom.component';
import { HeaderMainComponent } from './navigation/header-main/header-main.component';
import { FooterMainComponent } from './navigation/footer-main/footer-main.component';
import { FooterTopComponent } from './navigation/footer-top/footer-top.component';
import { FooterBottomComponent } from './navigation/footer-bottom/footer-bottom.component';
import { SharedStructureMaterialModule } from './shared-structure-material/shared-structure-material.module';
import { MainContainerEndComponent } from './navigation/main-container-end/main-container-end.component';
import { MainTemplateComponent } from './navigation/main-template/main-template.component';
import {  RouterModule } from '@angular/router';


import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderContainerComponent } from './navigation/header-container/header-container.component';
@NgModule({
  declarations: [NgxAbcfoundryCoreStructureMaterialComponent,
    HeaderComponent,
    FooterComponent,
    NavSideComponent,
    NavMenuComponent,
    NavTabsetComponent,
    NavActionsComponent,
    MainContainerComponent,
    NavToolbarComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    HeaderMainComponent,
    FooterMainComponent,
    FooterTopComponent,
    FooterBottomComponent,
    MainContainerEndComponent,
    MainTemplateComponent,
    HeaderContainerComponent,
    ],
  imports: [
  SharedStructureMaterialModule,
    RouterModule,
    FlexLayoutModule],
  exports: [NgxAbcfoundryCoreStructureMaterialComponent,
    HeaderComponent,
    FooterComponent,
    NavSideComponent,
    NavMenuComponent,
    NavTabsetComponent,
    NavActionsComponent,
    MainContainerComponent,
    NavToolbarComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    HeaderMainComponent,
    FooterMainComponent,
    FooterTopComponent,
    FooterBottomComponent,
    MainContainerEndComponent,
    FlexLayoutModule,
    MainTemplateComponent,
    HeaderContainerComponent,
    RouterModule]
})
export class NgxAbcfoundryCoreStructureMaterialModule { }
