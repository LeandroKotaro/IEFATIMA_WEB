import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _config:NgbCarouselConfig) { 
    _config.interval = 1000;
    _config.pauseOnHover = true;
  }
  ngOnInit(): void {
  }
}
