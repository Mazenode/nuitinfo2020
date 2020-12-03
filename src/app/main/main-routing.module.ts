import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: MainComponent, data: { layout: {
        paddings: {
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
          paddingTopUnit: "px",
          paddingRightUnit: "px",
          paddingBottomUnit: "px",
          paddingLeftUnit: "px"
        },
        header: true,
        sidebar: false
      }
    }
 },
  { path: 'Form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
