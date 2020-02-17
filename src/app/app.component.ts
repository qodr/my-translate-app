import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material';

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
  locale: string;

  constructor(private dateAdapter: DateAdapter<AppComponent>) {
    const path = window.location.pathname.split('/').filter(x => x && x.length > 0);
    this.locale = path[0] || 'tr';
    this.dateAdapter.setLocale(this.locale);
  }

  setLocale(locale: string) {
    window.location.href = window.location.pathname.replace(this.locale, locale);
  }
}
