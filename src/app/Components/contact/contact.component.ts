import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private appservice: AppService) { }

  contactBgImg = '/assets/Resources/contBG.jpg'

  ngOnInit(): void {
    this.appservice.bgPath.next(this.contactBgImg);
  }

}
