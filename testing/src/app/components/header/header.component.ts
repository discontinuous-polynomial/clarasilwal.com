import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
//import { AppStateService } from 'src/app/services/app-state.service';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/interfaces/contact.interface';
import { NONE_TYPE } from '@angular/compiler';
import { ContactComponent } from '../contact/contact.component';

// define arrays
export const socialItemsArray: Array<{
  name: string;
  url: string;
  icon: string;}> = [
];

// navbar menu

export const menuItems = [
  { name: 'About', url: '/About', icon: 'fas  fa-home'},
  { name: 'Notes', url: '/Notes', icon: 'fas fa-envelope'},
  { name: 'Contact', url: '/Contact', icon: 'fas fa-envelope'},
  { name: 'CV', url: '/CV', icon: 'fas fa-user', link:'./assets/pdfs/nathanaelChwS_cv.pdf'},
  // { name: 'Miscellaneous', url: '/Miscellaneous'},
];

// decorators

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

// define class <3 

export class HeaderComponent implements OnInit {
  isMenuOpened: boolean = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  clickedOutside(): void {
    this.isMenuOpened = false;
  }
  

  menu = menuItems
  socialItems = socialItemsArray;
  _contactData!: Contact;


  @Input() set contactData(contact: Contact) {
    this._contactData = contact;
    this._contactData.socialLinks = socialItemsArray;
  }
 
  public get contactData(): Contact {
    return this._contactData;
  }

  // constructors
  constructor() {}
 
  ngOnInit() {
  }

  toggle() {
    // this.appStateService.toggle();
  }
  open() {
    // this.appStateService.open();
  }
  close() {
    // this.appStateService.close();
  }
}