import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[capitalized]', 

  //provide Service which will cause our validator to be activated by Angular
  providers:[{
      provide:NG_VALIDATORS, 
      useExisting:CapitalizedValidatorDirective,
      multi:true
  }]
})


export class CapitalizedValidatorDirective implements Validator {

   public validate (control: AbstractControl)
   {

        if(control.value && control.value[0] >= "a" && control.value[0]<="z")
        {
            return {"notCapitalized" : true}; //there is an error
        }
        return null;  //no error
   }

  

}
