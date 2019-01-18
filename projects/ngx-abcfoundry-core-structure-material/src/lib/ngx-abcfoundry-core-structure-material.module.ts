import { NgModule } from '@angular/core';
import { NgxAbcfoundryCoreStructureMaterialComponent } from './ngx-abcfoundry-core-structure-material.component';
import { SharedStructureMaterialModule } from './shared/material/shared-structure-material/shared-structure-material.module';
import { FoundryTemplateComponent } from './layout/template/foundry-template/foundry-template.component';
import { FoundryFooterComponent } from './layout/footer/foundry-footer/foundry-footer.component';
import { FoundryFooterTopComponent } from './layout/footer/foundry-footer-top/foundry-footer-top.component';
import { FoundryFooterBottomComponent } from './layout/footer/foundry-footer-bottom/foundry-footer-bottom.component';
import { FoundryHeaderComponent } from './layout/header/foundry-header/foundry-header.component';
import { FoundryHeaderTopComponent } from './layout/header/foundry-header-top/foundry-header-top.component';
import { FoundryHeaderBottomComponent } from './layout/header/foundry-header-bottom/foundry-header-bottom.component';
import { FoundrySidebarComponent } from './layout/sidebar/foundry-sidebar/foundry-sidebar.component';
import { FoundrySidebarTopComponent } from './layout/sidebar/foundry-sidebar-top/foundry-sidebar-top.component';
import { FoundrySidebarBottomComponent } from './layout/sidebar/foundry-sidebar-bottom/foundry-sidebar-bottom.component';
import { FoundryMainComponent } from './layout/main/foundry-main/foundry-main.component';
import { FoundryMainTopComponent } from './layout/main/foundry-main-top/foundry-main-top.component';
import { FoundryMainBottomComponent } from './layout/main/foundry-main-bottom/foundry-main-bottom.component';
import { FoundrySideComponent } from './layout/main/foundry-side/foundry-side.component';
import { FoundrySideSecondaryComponent } from './layout/main/foundry-side-secondary/foundry-side-secondary.component';
import { FoundryMenuPrimaryComponent } from './navigation/menu/foundry-menu-primary/foundry-menu-primary.component';
import { FoundryMenuSecondaryComponent } from './navigation/menu/foundry-menu-secondary/foundry-menu-secondary.component';
import { FoundryMenuTertiaryComponent } from './navigation/menu/foundry-menu-tertiary/foundry-menu-tertiary.component';
import { FoundryMenuSocialComponent } from './navigation/menu/foundry-menu-social/foundry-menu-social.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [NgxAbcfoundryCoreStructureMaterialComponent, FoundryTemplateComponent, FoundryFooterComponent, FoundryFooterTopComponent, FoundryFooterBottomComponent, FoundryHeaderComponent, FoundryHeaderTopComponent, FoundryHeaderBottomComponent, FoundrySidebarComponent, FoundrySidebarTopComponent, FoundrySidebarBottomComponent, FoundryMainComponent, FoundryMainTopComponent, FoundryMainBottomComponent, FoundrySideComponent, FoundrySideSecondaryComponent, FoundryMenuPrimaryComponent, FoundryMenuSecondaryComponent, FoundryMenuTertiaryComponent, FoundryMenuSocialComponent],
  imports: [RouterModule,
  SharedStructureMaterialModule],
  exports: [
    NgxAbcfoundryCoreStructureMaterialComponent,
    SharedStructureMaterialModule,
    FoundryTemplateComponent,
    FoundryFooterComponent,
    FoundryFooterTopComponent,
    FoundryFooterBottomComponent,
    FoundryHeaderComponent,
    FoundryHeaderTopComponent,
    FoundryHeaderBottomComponent,
    FoundrySidebarComponent,
    FoundrySidebarTopComponent,
    FoundrySidebarBottomComponent,
    FoundryMainComponent,
    FoundryMainTopComponent,
    FoundryMainBottomComponent,
    FoundrySideComponent,
    FoundrySideSecondaryComponent,
    FoundryMenuPrimaryComponent,
    FoundryMenuSecondaryComponent,
    FoundryMenuTertiaryComponent,
    FoundryMenuSocialComponent]
})
export class NgxAbcfoundryCoreStructureMaterialModule { }
