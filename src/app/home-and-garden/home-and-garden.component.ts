import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  templateUrl: './home-and-garden.component.html'
})
export class HomeAndGardenComponent implements OnInit {
    pdfSrc: string = '../../assets/pdf/proof.pdf';

    constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
