import { Component, Input } from '@angular/core';
import { ITestInput } from 'src/app/models/test-input/test-input.module';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent {
 
  @Input()
  label:string ='';
  isNecessary: boolean =false;
  isMultiple:boolean =false;
  placeholder:string ='';
  description:string | undefined;
  id:string="";
}
