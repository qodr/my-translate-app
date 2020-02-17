# MyTranslateApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.10.

There are 2 translate implementations on different branches:
- Angular's i18n.
- ngx-translate module

For demo purpose the following languages are added:
- English (en)
- Dutch (nl)
- Turkish (tr)

## Angular's i18n

Implementation based on [Angular documentation](https://angular.io/guide/i18n).

### Serve

Each language can be run seperately by using the language code as configuration: e.g. `ng serve -c en`. In this case the application will be accessible by url: `http://localhost:4200/en`.

### Build

When releasing the site all languages can be build with single command: `npm run build-i18n`

## Ngx-translate module

Ngx-translate is a [third party library](http://www.ngx-translate.com/) for Angular.

### Serve

With this library Angular can be started as usual with `ng serve` and will be accessible by url `http://localhost:4200`.

### Build

With this library can released as usual with `ng build --prod`.
