import { Component, OnInit,Input } from '@angular/core';
import { Registration } from '../registration';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

    registrations: Registration[] = [];

    addUser(newItem:{ firstName, lastName }) {
        this.registrations.push(newItem);
    }

  // It maintains registration Model
  regModel: Registration;

  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;

  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';

  // It maintains table row index based on selection.
  selectedRow: number;

  constructor() {
    
  }

   //This method associate to New Button.
  onNew() {
    // Initiate new registration.
    this.regModel = new Registration();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
  }
   //This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push registration model object into registration list.
      this.registrations.push(this.regModel);
    } else {
      // Update the existing properties values based on model.
      this.registrations[this.selectedRow].firstName = this.regModel.firstName;
      this.registrations[this.selectedRow].lastName = this.regModel.lastName;
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.regModel = new Registration();
    // Retrieve selected registration from list and assign to model.
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding registration entry from the list.
    this.registrations.splice(index, 1);
  }

  // This method associate to Cancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }

  getReg() {
      return [
          {  'firstName': "ola", 'lastName':"ade" },
          { 'firstName': "eden", 'lastName': "hazard"},
          { 'firstName': "cristiano", 'lastName':"ronaldo"},
      ]
  }
  ngOnInit() {
      this.registrations = this.getReg();
  }

}
