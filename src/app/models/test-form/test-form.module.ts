import { ITestInput } from "../test-input/test-input.module";
import { ITestNumber } from "../test-number/test-number.module";
import { ITestSelect } from "../test-select/test-select.module";
import { ITestCheckBox} from './../test-checkbox/test-checkbox.module';

export interface ITestForm{
  formLabel:string,
  inputs:ITestInput[],
  checkBoxesLabel:string,
  checkBoxes:ITestCheckBox[],  
  numbers:ITestNumber[],
  selects:ITestSelect[]
   }
