import { Component } from '@angular/core';
import { ContactUs } from '../models/contactUs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent  {
public contactUs: ContactUs = new ContactUs();

 

}
