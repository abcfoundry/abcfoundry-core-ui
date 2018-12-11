import { NgModule } from '@angular/core';
import { NgxAbcfoundryCoreFormMaterialComponent } from './ngx-abcfoundry-core-form-material.component';



import { SharedFormMaterialModule } from './shared-form-material/shared-form-material.module';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import {InputTextComponent} from './input-text/input-text.component';
import { BaseInputComponent } from './base-input/base-input.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { BaseButtonComponent } from './base-button/base-button.component';
import { ButtonComponent } from './button/button.component';
import { ButtonRaisedComponent } from './button-raised/button-raised.component';
import { ButtonStrokedComponent } from './button-stroked/button-stroked.component';
import { ButtonFlatComponent } from './button-flat/button-flat.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { ButtonFabComponent } from './button-fab/button-fab.component';
import { ButtonFabMiniComponent } from './button-fab-mini/button-fab-mini.component';


@NgModule({
  declarations: [NgxAbcfoundryCoreFormMaterialComponent,
    InputTextComponent,
    InputPasswordComponent,
    InputTextareaComponent,
    BaseInputComponent,
    ButtonToggleComponent,
    BaseButtonComponent,
    ButtonComponent,
    ButtonRaisedComponent,
    ButtonStrokedComponent,
    ButtonFlatComponent,
    ButtonIconComponent,
    ButtonFabComponent,
    ButtonFabMiniComponent],
  imports: [
    SharedFormMaterialModule
  ],
  exports: [NgxAbcfoundryCoreFormMaterialComponent,
    SharedFormMaterialModule,
    InputTextComponent,
    InputPasswordComponent,
    InputTextareaComponent,
    BaseInputComponent,
    ButtonToggleComponent,
    BaseButtonComponent,
    ButtonComponent,
    ButtonRaisedComponent,
    ButtonStrokedComponent,
    ButtonFlatComponent,
    ButtonIconComponent,
    ButtonFabComponent,
    ButtonFabMiniComponent]
})
export class NgxAbcfoundryCoreFormMaterialModule { }
