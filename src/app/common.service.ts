import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  arr:any;
  getObj(arr:any){
    this.arr=arr;
  }
  setObj(){
    return this.arr;
  }

}