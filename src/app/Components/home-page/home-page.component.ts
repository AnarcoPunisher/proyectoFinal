import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private appservice: AppService) { }

  homebgImg = '/assets/Resources/fondo.jpg'

  ngOnInit(): void {
    this.appservice.bgPath.next(this.homebgImg)
  }

}
