import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service:AppService) {}
  title = 'proyecto';
  style = {
    'background-image':''
  }
  ngOnInit(){
    this.service.bgPath.subscribe((bgPath) => {
      this.style['background-image'] = 'url('+bgPath+')';
    });
  }
}
