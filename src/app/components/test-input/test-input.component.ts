import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITestInput } from 'src/app/models/test-input/test-input.module';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent {
   
  @Input()
  inputObject:ITestInput={
  label:'',
  isNecessary:false,
  isMultiple:false,
  placeholder:'',
  description:"",
  id:""
}

value:string="";

@Output()
  change: EventEmitter< {
    elementType:string,
    id:string,
    value:string
  }> = new EventEmitter< {
    elementType:string,
    id:string,
    value:string
  }>();

changeValue(){  
  this.change.emit( {
    elementType:'input',
    id:this.inputObject.id,
    value:this.value
  });
}

}
