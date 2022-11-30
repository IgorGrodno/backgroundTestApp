import { Component, Input, OnInit } from '@angular/core';
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

  }

