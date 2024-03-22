import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { map, take, filter } from 'rxjs/operators';
import StackBlitzSDK from '@stackblitz/sdk';
import { Angulartics2GoogleGlobalSiteTag } from 'angulartics2';
import { sources as demoUtilsSources } from './app-modules/app-utils/sources';
import { Subject } from 'rxjs';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap/nav/nav';

interface Source {
  filename: string;
  contents: {
    raw: string;
    highlighted: string;
  };
  language: string;
}

interface Demo {
  label: string;
  path: string;
  sources?: Source[];
  darkTheme: boolean;
  tags: string[];
}

function getSources(folder: string): Promise<Source[]> {
  return import('./app-modules/' + folder + '/sources.ts').then(
    ({ sources }) => {
      return sources.map(({ filename, contents }) => {
        const [, extension]: RegExpMatchArray = filename.match(/^.+\.(.+)$/);
        const languages: { [extension: string]: string } = {
          ts: 'typescript',
          html: 'html',
          css: 'css',
        };
        return {
          filename,
          contents: {
            raw: contents.raw.default
              .replace(
                ",\n    RouterModule.forChild([{ path: '', component: DemoComponent }])",
                ''
              )
              .replace("\nimport { RouterModule } from '@angular/router';", ''),
            highlighted: contents.highlighted.default // TODO - move this into a regexp replace for both
              .replace(
                ',\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])',
                ''
              )
              .replace(
                '\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;',
                ''
              ),
          },
          language: languages[extension],
        };
      });
    }
  );
}

const dependencyVersions: any = {
  angular: require('@angular/core/package.json').version,
  angularRouter: require('@angular/router/package.json').version,
  angularCalendar: require('../../../package.json').version,
  calendarUtils: require('calendar-utils/package.json').version,
  angularResizableElement: require('angular-resizable-element/package.json')
    .version,
  angularDraggableDroppable: require('angular-draggable-droppable/package.json')
    .version,
  dateFns: require('date-fns/package.json').version,
  rxjs: require('rxjs/package.json').version,
  bootstrap: require('bootstrap/package.json').version,
  zoneJs: require('zone.js/package.json').version,
  ngBootstrap: require('@ng-bootstrap/ng-bootstrap/package.json').version,
  rrule: require('rrule/package.json').version,
  fontAwesome: require('@fortawesome/fontawesome-free/package.json').version,
  positioning: require('positioning/package.json').version,
  flatpickr: require('flatpickr/package.json').version,
  angularxFlatpickr: require('angularx-flatpickr/package.json').version,
};

@Component({
  selector: 'mwl-app',
  styleUrls: ['./app.css'],
  templateUrl: './app.html',
})
export class AppComponent implements OnInit {
  @ViewChild('nav') nav: NgbNav;
  demos: Demo[] = [];
  filteredDemos: Demo[] = [];
  activeDemo: Demo;
  isMenuVisible = false;
  firstDemoLoaded = false;
  searchText = '';
  copied$ = new Subject<boolean>();

  constructor(
    private router: Router,
    analytics: Angulartics2GoogleGlobalSiteTag
  ) {
    analytics.startTracking();
  }

  ngOnInit() {
    const defaultRoute = this.router.config.find(
      (route) => route.path === '**'
    );

    this.demos = this.router.config
      .filter((route) => route.path !== '**')
      .map((route) => ({
        path: route.path,
        label: route.data.label,
        darkTheme: route.data.darkTheme,
        tags: route.data.tags || [],
      }));
    this.updateFilteredDemos();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(take(1))
      .subscribe(() => {
        this.firstDemoLoaded = true;
      });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .pipe(
        map((event: NavigationStart) => {
          if (event.url === '/') {
            return { url: `/${defaultRoute.redirectTo}` };
          }
          return event;
        })
      )
      .subscribe((event: NavigationStart) => {
        this.activeDemo = this.demos.find(
          (demo) => `/${demo.path}` === event.url
        );
        getSources(this.activeDemo.path).then((sources) => {
          this.activeDemo.sources = sources;
        });
      });

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', '7c1627e655');
    script.src = 'https://angular-calendar.ck.page/7c1627e655/index.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  updateFilteredDemos() {
    this.filteredDemos = this.demos.filter(
      (demo) =>
        !this.searchText ||
        [demo.label.toLowerCase(), ...demo.tags].some((tag) =>
          tag.includes(this.searchText.toLowerCase())
        )
    );
  }

  copied() {
    this.copied$.next(true);
    setTimeout(() => {
      this.copied$.next(false);
    }, 1000);
  }
}
