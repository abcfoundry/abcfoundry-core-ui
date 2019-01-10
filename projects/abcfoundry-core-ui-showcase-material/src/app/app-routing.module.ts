import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LayoutPage1Component} from './structure/layout/layout-page1/layout-page1.component';
import {LayoutPage4Component} from './structure/layout/layout-page4/layout-page4.component';
import {LayoutPage3Component} from './structure/layout/layout-page3/layout-page3.component';
import {LayoutPage2Component} from './structure/layout/layout-page2/layout-page2.component';
import {LayoutPage5Component} from './structure/layout/layout-page5/layout-page5.component';
import {ElementPage2Component} from './structure/elements/element-page2/element-page2.component';
import {ElementPage5Component} from './structure/elements/element-page5/element-page5.component';
import {ElementPage3Component} from './structure/elements/element-page3/element-page3.component';
import {ElementPage1Component} from './structure/elements/element-page1/element-page1.component';
import {ElementPage4Component} from './structure/elements/element-page4/element-page4.component';
import {ButtonPage5Component} from './form/buttons/button-page5/button-page5.component';
import {InputPage1Component} from './form/inputs/input-page1/input-page1.component';
import {InputPage4Component} from './form/inputs/input-page4/input-page4.component';
import {ButtonPage3Component} from './form/buttons/button-page3/button-page3.component';
import {ButtonPage1Component} from './form/buttons/button-page1/button-page1.component';
import {InputPage2Component} from './form/inputs/input-page2/input-page2.component';
import {InputPage3Component} from './form/inputs/input-page3/input-page3.component';
import {InputPage5Component} from './form/inputs/input-page5/input-page5.component';
import {ButtonPage4Component} from './form/buttons/button-page4/button-page4.component';
import {ButtonPage2Component} from './form/buttons/button-page2/button-page2.component';
import {AppComponent} from './app.component';
import {ShowcaseHomeComponent} from './showcase/showcase-home/showcase-home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: ShowcaseHomeComponent },
  { path: 'layout/page1', component: LayoutPage1Component },
  { path: 'layout/page2', component: LayoutPage2Component },
  { path: 'layout/page3', component: LayoutPage3Component },
  { path: 'layout/page4', component: LayoutPage4Component },
  { path: 'layout/page5', component: LayoutPage5Component },
  { path: 'element/page1', component: ElementPage1Component },
  { path: 'element/page2', component: ElementPage2Component },
  { path: 'element/page3', component: ElementPage3Component },
  { path: 'element/page4', component: ElementPage4Component },
  { path: 'element/page5', component: ElementPage5Component },
  { path: 'input/page1', component: InputPage1Component },
  { path: 'input/page2', component: InputPage2Component },
  { path: 'input/page3', component: InputPage3Component },
  { path: 'input/page4', component: InputPage4Component },
  { path: 'input/page5', component: InputPage5Component },
  { path: 'button/page1', component: ButtonPage1Component },
  { path: 'button/page2', component: ButtonPage2Component },
  { path: 'button/page3', component: ButtonPage3Component },
  { path: 'button/page4', component: ButtonPage4Component },
  { path: 'button/page5', component: ButtonPage5Component },
  { path: '**', component: ShowcaseHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
