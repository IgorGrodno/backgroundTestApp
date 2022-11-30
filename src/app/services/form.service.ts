import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from "@angular/common/http"
import { ITestForm } from '../models/test-form/test-form.module';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { 
  }
  
  getData():Observable<ITestForm>{
   return this.http.get<ITestForm>("../../assets/formData.json");
  }

  postData(data:string){
    return this.http.post("../../assets/formInputsData.json",data);   
}
}
