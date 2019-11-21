
import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})

export class ReportsComponent implements OnInit {


  constructor(private _main: MainService) { }

  ngOnInit() {

  }

}