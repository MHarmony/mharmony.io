import { Component } from '@angular/core';
import { AppConfig } from '../../app.config';

@Component({
  selector: 'mharmony-io-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public constructor(public appConfig: AppConfig) {}

  public changeTheme(event: Event, dark: boolean): void {
    const themeElement = document.getElementById('theme-link');
    const theme = dark ? 'lara-dark-blue' : 'lara-light-blue';

    if (themeElement) {
      const themeElementHref = themeElement.getAttribute('href');

      if (themeElementHref) {
        themeElement.setAttribute(
          'href',
          themeElementHref.replace(this.appConfig.theme, theme)
        );
        this.appConfig.theme = theme;
        this.appConfig.dark = dark;
      }
    }

    event.preventDefault();
  }
}
