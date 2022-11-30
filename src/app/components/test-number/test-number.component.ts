import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ITestNumber } from './../../models/test-number/test-number.module';

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent implements OnInit{

  ngOnInit(): void {
    this.value = this.numberObject.minValue;
  }

  @Input()
  numberObject:ITestNumber={
  label:'',
  minValue:-999999,
  id:'',
  description:''}

 

value:number =0;

@Output()
  change: EventEmitter< {
    elementType:string,
    id:string,
    value:number
  }> = new EventEmitter< {
    elementType:string,
    id:string,
    value:number
  }>();

changeValue(){
  if(this.value<this.numberObject.minValue){
    this.value<this.numberObject.minValue;
  }  
  this.change.emit( {
    elementType:'number',
    id:this.numberObject.id,
    value:this.value
  });
}

}
