import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  constructor(@Inject(TranslateService) public translate: TranslateService) {
    translate.addLangs(['en', 'de', 'fr'])
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
