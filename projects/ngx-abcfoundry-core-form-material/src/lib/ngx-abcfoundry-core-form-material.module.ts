import { NgModule } from '@angular/core';
import { NgxAbcfoundryCoreFormMaterialComponent } from './ngx-abcfoundry-core-form-material.component';



import { SharedFormMaterialModule } from './shared-form-material/shared-form-material.module';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import {InputTextComponent} from './input-text/input-text.component';


@NgModule({
  declarations: [NgxAbcfoundryCoreFormMaterialComponent, InputTextComponent, InputPasswordComponent, InputTextareaComponent],
  imports: [
    SharedFormMaterialModule
  ],
  exports: [NgxAbcfoundryCoreFormMaterialComponent, SharedFormMaterialModule, InputTextComponent, InputPasswordComponent, InputTextareaComponent]
})
export class NgxAbcfoundryCoreFormMaterialModule { }
