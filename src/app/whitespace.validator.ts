import { AbstractControl, ValidationErrors } from '@angular/forms';

export class WhitespaceValidator {
  static noWhiteSpaces(control: AbstractControl): ValidationErrors | null {
    if (control.value.indexOf(' ') >= 0) {
      return { noWhiteSpaces: true };
    }

    return null;
  }
}
