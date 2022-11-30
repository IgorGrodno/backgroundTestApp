import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITestCheckBox } from 'src/app/models/test-checkbox/test-checkbox.module';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent {

  value:boolean=false;

  @Input()
  checkBoxObject:ITestCheckBox={
    label:"",
    id:""
     }   
     
     @Output()
  change: EventEmitter< {
    elementType:string,
    id:string,
    value:boolean
  }> = new EventEmitter< {
    elementType:string,
    id:string,
    value:boolean
  }>();

changeValue(){ 
  this.change.emit( {
    elementType:'checkBox',
    id:this.checkBoxObject.id,
    value:this.value
  });
}
     
}
