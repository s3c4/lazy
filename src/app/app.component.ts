import { Component } from '@angular/core';
import { TranslateService } from './services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Lazy Components';

  constructor(private translateService: TranslateService) {}

  public changeLanguage(activeLanguage: Event): void {
    const selectedLanguage = (<HTMLSelectElement>activeLanguage.target).value;
    this.translateService.activeLanguage.next(selectedLanguage);
    sessionStorage.setItem('language', selectedLanguage);
  }
}
