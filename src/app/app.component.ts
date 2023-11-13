import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {ComSelectorComponent} from "./com-selector/com-selector.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
     RouterOutlet,
     MatSlideToggleModule,
     ComSelectorComponent,
    ],
    
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather_wapp';

  ngOnInit(): void {
    console.log("Hola bro");
  }
  
}
