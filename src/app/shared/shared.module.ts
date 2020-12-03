import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColorPipe } from './pipes/theme-color.pipe';
import { NbSpinnerModule, NbCardModule, NbButtonModule, NbIconModule, NbInputModule, NbSelectModule, NbFormFieldModule } from '@nebular/theme';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { UiValueUpdateDirective } from './directives/ui-value-update.pipe';
import { ToDatePipe } from './pipes/to-date.pipe';
import { FormsModule } from '@angular/forms';
import { WithQueryParamsPipe } from './pipes/with-query-params.pipe';
import { MapComponent } from './components/map.component';
import { EchartsDirective } from './directives/echarts.directive';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



@NgModule({
  declarations: [ThemeColorPipe, SanitizeHtmlPipe, UiValueUpdateDirective, ToDatePipe, WithQueryParamsPipe, MapComponent, EchartsDirective],
  imports: [
    CommonModule,
    NbSpinnerModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    FormsModule,
    LeafletModule,
    NbSelectModule,
    NbFormFieldModule
  ],
  exports: [ThemeColorPipe, NbSpinnerModule, SanitizeHtmlPipe, NbCardModule, NbButtonModule, NbIconModule, UiValueUpdateDirective, ToDatePipe, NbInputModule, FormsModule, WithQueryParamsPipe, MapComponent, EchartsDirective, LeafletModule, NbSelectModule, NbFormFieldModule]
})
export class SharedModule { }
