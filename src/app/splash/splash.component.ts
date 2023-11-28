import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { trigger, transition, style, animate,state } from '@angular/animations';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  animations: [
    trigger('fadeOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate('2s')),
    ])
 
  ]
})


export class SplashComponent implements OnInit {
  aText: string[] = [
    "Anand V"
  ];
  iSpeed = 100; // time delay of print out
  iIndex = 0; // start printing array at this position
  iArrLength = this.aText[0].length; // the length of the text array
  iScrollAt = 20; // start scrolling up at this many lines

  iTextPos = 0; // initialize text position
  sContents = ''; // initialize contents variable
  iRow:any; // initialize current row

  fadeOutState = 'visible'; // animation state
  circleState = 'initial'; 
  coverScreenState = 'hidden';

constructor(private route:Router){}

  ngOnInit(): void {
    this.typewriter();
  }

  typewriter(): void {
    this.sContents = ' ';
    this.iRow = Math.max(0, this.iIndex - this.iScrollAt);
    const destination = document.getElementById('typedtext');

    if(destination){
    while (this.iRow < this.iIndex) {
      this.sContents += this.aText[this.iRow++] + '<br />';
    }
  
    destination.innerHTML = this.sContents + this.aText[this.iIndex].substring(0, this.iTextPos) + '';

    if (this.iTextPos++ === this.iArrLength) {
      this.iTextPos = 0;
      this.iIndex++;

      if (this.iIndex !== this.aText.length) {
        this.iArrLength = this.aText[this.iIndex].length;
        setTimeout(() => this.typewriter(), 500);
      } else {
        // Trigger fade-out animation after the typewriter effect
        setTimeout(() => this.fadeOut(), 2000);
      }
    } else {
      setTimeout(() => this.typewriter(), this.iSpeed);
    }
  }
}
  fadeOut(): void {
    
      this.fadeOutState = 'hidden';
      setTimeout(() => this.navigateToAnotherPage(), 2100);
  }

  navigateToAnotherPage(): void {
    // Navigate to the desired route or URL
    this.route.navigate(['/home']); // Adjust the route as needed
  }

}

