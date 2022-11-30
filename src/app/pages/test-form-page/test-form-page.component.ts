import { Component, OnInit, Input } from '@angular/core';
import { ITestFormData } from 'src/app/models/test-form-data/test-form-data.module';
import { ITestForm } from 'src/app/models/test-form/test-form.module';
import { __values } from 'tslib';
import { FormService } from './../../services/form.service';

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

  formData: ITestFormData={
    inputs: [],
    checkBoxes: [],
    numbers: [],
    selects: []
  };


 constructor(private formService:FormService){
  }

createForm(){{
  this.formService.getData().subscribe({next:(data: ITestForm) => {
    this.dataObject.formLabel=data.formLabel;   
    this.dataObject.inputs=data.inputs; 
    this.dataObject.checkBoxesLabel=data.checkBoxesLabel; 
    this.dataObject.checkBoxes=data.checkBoxes; 
    this.dataObject.numbers=data.numbers; 
    this.dataObject.selects=data.selects; 

    for(let i=0;i<data.inputs.length;i++)
    {
      this.formData.inputs.push({
        id: data.inputs[i].id,
        value:""
      });
    }
    for(let i=0;i<data.checkBoxes.length;i++)
    {
      this.formData.checkBoxes.push({
        id: data.checkBoxes[i].id,
        value:false
      });
    }
    for(let i=0;i<data.numbers.length;i++)
    {
      this.formData.numbers.push({
        id: data.numbers[i].id,
        value:data.numbers[i].minValue
      });
    }
    for(let i=0;i<data.selects.length;i++)
    {
      this.formData.selects.push({
        id: data.selects[i].id,
        value:""
      });
    }
  }});
 }   }

  ngOnInit()
  {
    this.createForm();
  }

changeValue(data:any){
  switch (data.elementType) {
    case 'select':
      for(let i =0;i<this.formData.selects.length;i++)
      {
        if(this.formData.selects[i].id===data.id)
        {
          this.formData.selects[i].value=data.value;
        }
      }
      break;
    case 'number':
      for(let i =0;i<this.formData.numbers.length;i++)
      {
        if(this.formData.numbers[i].id===data.id)
        {
          this.formData.numbers[i].value=data.value;
        }
      }
      break;   
    case 'input':
      for(let i =0;i<this.formData.inputs.length;i++)
      {
        if(this.formData.inputs[i].id===data.id)
        {
          this.formData.inputs[i].value=data.value;
        }
      }
      break;
    case 'checkBox':
      for(let i =0;i<this.formData.checkBoxes.length;i++)
      {
        if(this.formData.checkBoxes[i].id===data.id)
        {
          this.formData.checkBoxes[i].value=data.value;
        }
      }
      break;
  }
  let buttonActiveFlag=true;
  for(let i=0;i<this.dataObject.inputs.length;i++)
  {    
    if(this.dataObject.inputs[i].isNecessary)
    {
      for(let j=0;j<this.formData.inputs.length;j++)
      {
        if((this.formData.inputs[j].id===this.dataObject.inputs[i].id)&&(this.formData.inputs[j].value.length<1))
        {
          buttonActiveFlag=false;
        }
      }
    }
    if(this.dataObject.selects[i].isNecessary)
    {
      for(let j=0;j<this.formData.selects.length;j++)
      {
        if((this.formData.selects[j].id===this.dataObject.selects[i].id)&&(this.formData.selects[j].value.length<1))
        {
          buttonActiveFlag=false;
        }
      }
    }      
  }
  if(buttonActiveFlag)
  {
    document.getElementById("submitButton")?.removeAttribute("disabled");
  }
  else{
    document.getElementById("submitButton")?.setAttribute("disabled","true");
  }
}

createDataString(){
  let data=JSON.stringify(this.formData);    
  console.log(data);
  this.createForm();
}

}
