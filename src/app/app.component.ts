import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-banner/ad-banner.component';
import { AdService } from './ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular9-dynamic-components';
  ads: AdItem[];

  constructor(private adService: AdService){

  }

  ngOnInit(){
    this.ads = this.adService.getAds();
  }

}
