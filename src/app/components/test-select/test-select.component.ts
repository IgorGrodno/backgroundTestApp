import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITestSelect } from './../../models/test-select/test-select.module';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent {

  @Input()
  selectObject:ITestSelect={
  label:'',
  isNecessary:false,
  values:[],
  id:''
  }

  value:string='Не важно';

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
    elementType:'select',
    id:this.selectObject.id,
    value:this.value
  });
}
  }

