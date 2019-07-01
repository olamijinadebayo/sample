import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Registration } from '../registration';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

    @Output() newUser = new EventEmitter<{firstName:string,lastName:string}>();

    addNewItem(firstName:string, lastName: string) {
        this.newUser.emit( {firstName,lastName} );
    }

    model = new Registration()
    submitted = false;
    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    newReg() {
        this.model = new Registration('', '');
    }
    constructor() { }

  ngOnInit() {
  }

}
