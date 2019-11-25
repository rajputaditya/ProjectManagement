import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template:  `
  <div class="container text-center" style='margin-bottom:50px;'>
  <div class="row">
      <div class="col-md-12">
          <div>
              <h1 style='margin-top:80px;'>
                  Oops!</h1>
              <h2>
                  404 Not Found</h2>
              <div class="error-details">
                  The page you are looking for doesn't exist!
              </div>
              <div class="error-actions" style='margin-top:20px;'>
                  <a routerLink="/viewProjects" class="btn btn-warning btn-lg">
                      Take Me Home </a>
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
