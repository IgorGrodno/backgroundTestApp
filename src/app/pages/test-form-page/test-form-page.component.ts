import { Component, OnInit } from '@angular/core';
import { ITestForm } from 'src/app/models/test-form/test-form.module';
import { FormGeterService } from 'src/app/services/form-geter.service';

@Component({
  selector: 'app-test-form-page',
  templateUrl: './test-form-page.component.html',
  styleUrls: ['./test-form-page.component.scss']
})
export class TestFormPageComponent implements OnInit {

  dataObject:ITestForm={
    formLabel:"",
    inputs:[],
    checkBoxesLabel:"",
    checkBoxes:[],  
    numbers:[],
    selects:[]
  };  

 constructor(private formGeterService:FormGeterService){
  }

  ngOnInit(){
    this.formGeterService.getData().subscribe({next:(data: ITestForm) => {
      this.dataObject.formLabel=data.formLabel;   
      this.dataObject.inputs=data.inputs; 
      this.dataObject.checkBoxesLabel=data.checkBoxesLabel; 
      this.dataObject.checkBoxes=data.checkBoxes; 
      this.dataObject.numbers=data.numbers; 
      this.dataObject.selects=data.selects; 
    }});
   }  

}
