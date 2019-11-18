import { Component, OnInit, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectManagement';

  
  constructor(@Inject(TranslateService) public translate: TranslateService) {
    translate.addLangs(['en', 'de'])
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
