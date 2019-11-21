import { Component, OnInit } from '@angular/core';
import { MainService } from '../reports/main.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-growth',
  templateUrl: './growth.component.html',
  styleUrls: ['./growth.component.scss']
})
export class GrowthComponent implements OnInit {

  constructor(private _main: MainService) { }

  ngOnInit() {
    
  }

}