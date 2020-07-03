import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-job-ad',
  templateUrl: './hero-job-ad.component.html',
  styleUrls: ['./hero-job-ad.component.css']
})
export class HeroJobAdComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
