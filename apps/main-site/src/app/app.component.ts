import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'mharmony-io-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public constructor(private primeNgConfig: PrimeNGConfig) {}

  public ngOnInit(): void {
    this.primeNgConfig.ripple = true;
  }
}
