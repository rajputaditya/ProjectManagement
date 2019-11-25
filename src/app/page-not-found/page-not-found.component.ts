import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template:  `
  <div class="container text-center" style='margin-bottom:50px;'>
  <div class="row">
      <div class="col-md-12">
          <div>
              <h1 style='margin-top:80px;'>
                  {{'page-not-found.h1-10'| translate}}</h1>
              <h2>
                  404 Not Found</h2>
              <div class="error-details">
              {{'page-not-found.div_15'| translate}}
              </div>
              <div class="error-actions" style='margin-top:20px;'>
                  <a routerLink="/viewProjects" class="btn btn-warning btn-lg">
                  {{'page-not-found.a_19'| translate}} </a>
              </div>
          </div>
      </div>
  </div>
</div>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
