import { Component } from '@angular/core';
// import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  // slides = [
  //   {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
  //   {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},
  //   {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
  //   {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
  //   {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
  // ];
    
  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/1500/600"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/1500/600"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/1500/600"}
  ];
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
