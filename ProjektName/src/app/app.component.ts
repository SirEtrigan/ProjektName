import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjektName';
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
}
// Password Container Visibility
export class FormFieldPrefixSuffixExample {
  
}
// Email Error input
export class FormFieldErrorExample {


}
