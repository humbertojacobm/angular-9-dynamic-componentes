import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
