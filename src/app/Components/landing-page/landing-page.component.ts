import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private appservice: AppService) { }

  landingbgImg = 'https://imageio.forbes.com/specials-images/imageserve/5de97edd25ab5d0007006e72/World-s-Top-Earning-Musicians-2019/0x0.jpg?format=jpg&height=1275&width=2720'

  ngOnInit(): void {
    this.appservice.bgPath.next(this.landingbgImg);
  }

}
