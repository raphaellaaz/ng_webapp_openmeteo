import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NomatimApiService } from '../services/nomatim-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-com-selector',
  standalone: true,
  imports: [
    CommonModule, 
    MatSlideToggleModule,
    FormsModule,
  ],
  templateUrl: './com-selector.component.html',
  styleUrl: './com-selector.component.scss'
})


export class ComSelectorComponent {
  resultado: any;
  coords: any;
  inputaddress:string='';
  
  constructor(private nomatim: NomatimApiService){
  }

  getAddress():void{
    this.nomatim.getDataNomatim(this.inputaddress).subscribe(
      data=>{
        this.resultado = data;
        console.log(this.inputaddress);
        console.log(this.resultado);
      },
      error =>{
        console.error("Error en comoponente selector y api", error);
      }
    );
  }


  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const location = `${latitude},${longitude}`;
          this.coords=location;
          console.log(location);
        },
        error => {
          console.error('Error al obtener la ubicación:', error);
        }
      );
    } else {
      console.error('Geolocalización no está soportada por el navegador.');
    }
  }





}
