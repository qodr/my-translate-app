import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-translate-app';
  locales = [
    { name: 'English', value: 'en' },
    { name: 'Dutch', value: 'nl' },
    { name: 'Turkish', value: 'tr' }
  ];
  locale = 'en';

  constructor(private dateAdapter: DateAdapter<AppComponent>, private translateService: TranslateService) {
    this.setLocale(this.locale);
  }

  setLocale(locale: string) {
    this.locale = locale;
    this.dateAdapter.setLocale(this.locale);
    this.translateService.use(this.locale);
  }
}
