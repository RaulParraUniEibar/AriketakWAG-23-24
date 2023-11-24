import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nire-osagaia',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './nire-osagaia.component.html',
  styleUrl: './nire-osagaia.component.css'
})


export class NireOsagaiaComponent {
  /*langilea = {
    izena: 'Pepe',
    abizena: 'Perez',
    generoa: 'gizona',
    irudia: './assets/img/Vilma.jpg'
    };
*/
  myText = "Nire izena: Raúl da";

  Title="Langileen zerrenda";
  rowStart = 0;
  rowLimit = 1;
    kenduRow() {
    this.rowStart -= 1;
    this.rowLimit -= 1;
    }
    gehituRow() {
    this.rowStart += 1;
    this.rowLimit += 1;
    }

    getTitle() {
    return this.Title;
    };
    

    langileak = [
      { izena: "Pepe", abizena: "Perez", generoa: "gizona", soldata: 1000,likes: 0,lanean: true,jaiotza: new Date(3/3/2023)},
      { izena: "Sara", abizena: "Ruiz", generoa: "emakumea", soldata: 1000,likes: 0,lanean: true,jaiotza: new Date(1/1/2023)},
      { izena: "Paul", abizena: "Elorza", generoa: "gizona", soldata: 1500,likes: 0,lanean: false,jaiotza: new Date(2/7/2023) },
      { izena: "Raul", abizena: "Txakartegi", generoa: "gizona", soldata: 2000,likes: 0,lanean: false,jaiotza: new Date(25/12/2023) }
      ];

    gehituLikes(langilea: any)
    { langilea.likes++; }

    
}
