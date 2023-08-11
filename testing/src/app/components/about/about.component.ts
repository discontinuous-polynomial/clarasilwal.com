import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, Input, NgModule } from '@angular/core';
import { About, Service } from 'src/app/interfaces/about.model';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { AppStateService } from 'src/app/services/app-state.service';
//import { environment } from 'src/environments/environment';
// import { MatDivider } from '@angular/material/divider'

// define arrays

export const notesArray: Service[]= [
  {
    name: 'Algebra',
    icon: 'fa fa-file-text',
    desc: 'Groups, Rings, Modules, Fields. Commutative Algebra, algebraic number theory, representation theory, category theory. Homological algebra comming soon!',
    link: '././assets/img/nate-pic.jpeg'
  },
  {
    name: 'Geometry',
    icon: 'fa fa-file-text',
    desc: 'Here are my geometry notes!',
    link: '././assets/img/nate-pic.jpeg'
  },
  {
    name: 'Complex',
    icon: 'fa fa-file-text',
    desc: 'Here are my complex analysis notes!',
    link: '././assets/img/nate-pic.jpeg'
  },
  {
    name: 'Logic',
    icon: 'fa fa-file-text',
    desc: 'Here are my logic notes!',
    link: '././assets/img/nate-pic.jpeg'
  },
  {
    name: 'Marco',
    icon: 'fa fa-file-text',
    desc: 'Here are my marco notes! I love them so much they are amazing',
    link: '././assets/img/nate-pic.jpeg'
  },
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent implements OnInit {
  services = notesArray;

  // constructor(private modalService: NgbModal) {
  // }

  // public open(modal: any): void {
  //   this.modalService.open(modal);
  // }

  ngOnInit() {
  }
}
