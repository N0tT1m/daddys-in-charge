import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { DemoUtilsModule } from '../app-utils/module';
import { DemoComponent } from './component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

registerLocaleData(localeFr);

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    DemoUtilsModule,
    RouterModule.forChild([{ path: '', component: DemoComponent }]),
  ],
  declarations: [DemoComponent],
  exports: [DemoComponent],
})
export class DemoModule {}
