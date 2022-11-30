import { Component, Input } from '@angular/core';
import { ITestCheckBox } from 'src/app/models/test-checkbox/test-checkbox.module';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent {

  @Input()
  checkBoxObject:ITestCheckBox={
    label:"",
    id:""
     }
     
}
