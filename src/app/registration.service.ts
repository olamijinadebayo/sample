import { Injectable } from '@angular/core';
import { Registration } from './registration';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  private registrations: Registration[];
  
  constructor() { 

    this.registrations= [
        new Registration('ola','ade') ,
        new Registration('ola','adebayo')
       ];
  }


  addUser(newItem:{ firstName:string, lastName:string }) {
    this.registrations.push(newItem);
  }

  public getUsers(): Registration[] {
    return this.registrations;
  }











}
