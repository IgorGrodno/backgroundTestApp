import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestFormPageComponent } from './pages/test-form-page/test-form-page.component';

const routes: Routes = [
  {path: "",component:TestFormPageComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
