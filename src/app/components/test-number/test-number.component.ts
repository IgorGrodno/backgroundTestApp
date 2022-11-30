import { Component, Input } from '@angular/core';
import { ITestNumber } from './../../models/test-number/test-number.module';

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent {
  @Input()
  numberObject:ITestNumber={
  label:'',
  isNecessary:false,
  minValue:-999999,
  id:'',
  description:''}

  valueCheck(ev: any) :void{
  if(ev.target.value<ev.target.min){
    ev.target.value=ev.target.min;
  }
}

}
