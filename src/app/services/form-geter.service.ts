import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from "@angular/common/http"
import { ITestForm } from '../models/test-form/test-form.module';

@Injectable({
  providedIn: 'root'
})
export class FormGeterService {

  constructor(private http:HttpClient) { 
  }
  
  getData():Observable<ITestForm>{
   return this.http.get<ITestForm>("../../assets/formData.json");
  }
}
