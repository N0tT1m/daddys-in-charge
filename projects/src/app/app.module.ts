import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgbNavModule,
  NgbCollapseModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { Angulartics2Module } from 'angulartics2';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { AppComponent } from './app.component';
import { DaddysInChargeComponent as DefaultAppComponent } from './app-modules/daddys-in-charge/component';
import { DefaultDaddysInChargeModule as DefaultAppModule } from './app-modules/daddys-in-charge/module';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbNavModule,
    NgbCollapseModule,
    NgbTooltipModule,
    DragAndDropModule,
    Angulartics2Module.forRoot({
      developerMode: !environment.production,
    }),
    ClipboardModule,
    DefaultAppModule,
    RouterModule.forRoot(
      [
        {
          path: 'daddy',
          component: DefaultAppComponent,
          data: {
            label: 'Daddys In Charge',
          },
        },
        {
          path: 'async-events',
          loadChildren: () =>
            import('./app-modules/async-events/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Async events',
          },
        },
        {
          path: 'optional-event-end-dates',
          loadChildren: () =>
            import('./app-modules/optional-event-end-dates/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Optional event end dates',
          },
        },
        {
          path: 'editable-deletable-events',
          loadChildren: () =>
            import('./app-modules/editable-deletable-events/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Editable / deletable events',
          },
        },
        {
          path: 'draggable-events',
          loadChildren: () =>
            import('./app-modules/draggable-events/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Draggable events',
          },
        },
        {
          path: 'resizable-events',
          loadChildren: () =>
            import('./app-modules/resizable-events/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Resizable events',
          },
        },
        {
          path: 'month-view-badge-total',
          loadChildren: () =>
            import('./app-modules/month-view-badge-total/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Month view badge total',
          },
        },
        {
          path: 'recurring-events',
          loadChildren: () =>
            import('./app-modules/recurring-events/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Recurring events',
          },
        },
        {
          path: 'custom-event-class',
          loadChildren: () =>
            import('./app-modules/custom-event-class/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Custom event class',
          },
        },
        {
          path: 'clickable-events',
          loadChildren: () =>
            import('./app-modules/clickable-events/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Clickable events',
          },
        },
        {
          path: 'clickable-days',
          loadChildren: () =>
            import('./app-modules/clickable-days/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Clickable times',
          },
        },
        {
          path: 'custom-hour-duration',
          loadChildren: () =>
            import('./app-modules/custom-hour-duration/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Custom hour duration',
          },
        },
        {
          path: 'day-view-start-end',
          loadChildren: () =>
            import('./app-modules/day-view-start-end/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Day view start / end time',
          },
        },
        {
          path: 'day-view-hour-split',
          loadChildren: () =>
            import('./app-modules/day-view-hour-split/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Day view hour split',
          },
        },
        {
          path: 'navigating-between-views',
          loadChildren: () =>
            import('./app-modules/navigating-between-views/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Navigating between views',
          },
        },
        {
          path: 'before-view-render',
          loadChildren: () =>
            import('./app-modules/before-view-render/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Before view render',
            tags: ['disable'],
          },
        },
        {
          path: 'exclude-days',
          loadChildren: () =>
            import('./app-modules/exclude-days/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Exclude Weekends',
          },
        },
        {
          path: 'i18n',
          loadChildren: () =>
            import('./app-modules/i18n/module').then((m) => m.DemoModule),
          data: {
            label: 'Internationalisation',
            tags: ['translation', 'i18n', 'translate', 'locale'],
          },
        },
        {
          path: 'draggable-external-events',
          loadChildren: () =>
            import('./app-modules/draggable-external-events/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Draggable external events',
          },
        },
        {
          path: 'all-day-events',
          loadChildren: () =>
            import('./app-modules/all-day-events/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'All day events',
          },
        },
        {
          path: 'customise-date-formats',
          loadChildren: () =>
            import('./app-modules/customise-date-formats/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Customise date formats',
          },
        },
        {
          path: 'show-dates-on-titles',
          loadChildren: () =>
            import('./app-modules/show-dates-on-titles/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Show dates on title',
          },
        },
        {
          path: 'disable-tooltips',
          loadChildren: () =>
            import('./app-modules/disable-tooltips/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Disable tooltips',
          },
        },
        {
          path: 'additional-event-properties',
          loadChildren: () =>
            import('./app-modules/additional-event-properties/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Additional event properties',
          },
        },
        {
          path: 'selectable-period',
          loadChildren: () =>
            import('./app-modules/selectable-period/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Selectable period',
          },
        },
        {
          path: 'min-max-date',
          loadChildren: () =>
            import('./app-modules/min-max-date/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Min max date',
          },
        },
        {
          path: 'refreshing-the-view',
          loadChildren: () =>
            import('./app-modules/refreshing-the-view/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Refreshing the view',
          },
        },
        {
          path: 'custom-templates',
          loadChildren: () =>
            import('./app-modules/custom-templates/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Custom templates',
          },
        },
        {
          path: 'group-similar-events',
          loadChildren: () =>
            import('./app-modules/group-similar-events/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Group similar events',
          },
        },
        {
          path: 'context-menu',
          loadChildren: () =>
            import('./app-modules/context-menu/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Context menu',
            tags: ['right click'],
          },
        },
        {
          path: 'week-view-minute-precision',
          loadChildren: () =>
            import('./app-modules/week-view-minute-precision/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Week view minute precision',
          },
        },
        {
          path: 'extra-month-view-weeks',
          loadChildren: () =>
            import('./app-modules/extra-month-view-weeks/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Extra month view weeks',
          },
        },
        {
          path: 'disable-slide-animation',
          loadChildren: () =>
            import('./app-modules/disable-slide-animation/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Disable slide animation',
          },
        },
        {
          path: 'no-events-label',
          loadChildren: () =>
            import('./app-modules/no-events-label/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'No events label',
          },
        },
        {
          path: 'moment',
          loadChildren: () =>
            import('./app-modules/moment/module').then((m) => m.DemoModule),
          data: {
            label: 'Use moment',
          },
        },
        {
          path: 'dayjs',
          loadChildren: () =>
            import('./app-modules/dayjs/module').then((m) => m.DemoModule),
          data: {
            label: 'Use dayjs',
          },
        },
        {
          path: 'day-view-scheduler',
          loadChildren: () =>
            import('./app-modules/day-view-scheduler/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Day view scheduler',
          },
        },
        {
          path: 'drag-to-create-events',
          loadChildren: () =>
            import('./app-modules/drag-to-create-events/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Drag to create events',
          },
        },
        {
          path: 'responsive-week-view',
          loadChildren: () =>
            import('./app-modules/responsive-week-view/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Responsive week view',
          },
        },
        {
          path: 'dark-theme',
          loadChildren: () =>
            import('./app-modules/dark-theme/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Dark theme',
            darkTheme: true,
          },
        },
        {
          path: 'week-view-event-margin',
          loadChildren: () =>
            import('./app-modules/week-view-event-margin/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Week view event margin',
          },
        },
        {
          path: 'customise-current-time-marker',
          loadChildren: () =>
            import('./app-modules/customise-current-time-marker/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Customise current time marker',
          },
        },
        {
          path: 'public-holidays',
          loadChildren: () =>
            import('./app-modules/public-holidays/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Public holidays',
          },
        },
        {
          path: 'scroll-to-current-time',
          loadChildren: () =>
            import('./app-modules/scroll-to-current-time/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Scroll to current time',
          },
        },
        {
          path: 'rtl',
          loadChildren: () =>
            import('./app-modules/rtl/module').then((m) => m.DemoModule),
          data: {
            label: 'RTL',
          },
        },
        {
          path: 'validate-drag-and-resize',
          loadChildren: () =>
            import('./app-modules/validate-drag-and-resize/module').then(
              (m) => m.DemoModule
            ),
          data: {
            label: 'Validate dragging and resizing',
          },
        },
        {
          path: '**',
          redirectTo: 'kitchen-sink',
        },
      ],
      {
        useHash: true,
      }
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
