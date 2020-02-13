import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-translate-app';

  constructor(private dateAdapter: DateAdapter<AppComponent>) {

  }

  setLocale(locale: string) {
    this.dateAdapter.setLocale(locale);
  }
}
