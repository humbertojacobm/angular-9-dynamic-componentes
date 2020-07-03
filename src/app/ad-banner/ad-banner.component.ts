import { Component, OnInit, OnDestroy, Input, Type, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdDirective } from '../ad.directive';

export class AdItem{
  constructor(public component: Type<any>, public data:any){}
}

interface AdComponent{
  data: any;
}

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective,{static:true}) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }
  ngOnDestroy(){
    clearInterval(this.interval);
  }

  getAds(){
    this.interval = setInterval(()=>{
      this.loadComponent()
    },3000);
  }

  loadComponent(){
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    (<AdComponent>componentRef.instance).data = adItem.data;

  }

}
