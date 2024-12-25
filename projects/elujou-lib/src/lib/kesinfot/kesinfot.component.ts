import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { products } from '../products';

@Component({
  selector: 'kesinfot-component',
  templateUrl: './kesinfot.component.html',
  styleUrls: ['./kesinfot.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class KesinfotComponent implements OnInit{


  title = "Hea kasutaja!";
  content1b = "Ettevõtte põhitegevusala (EMTAK): ";
  content2 = "Sinu ettevõtte puhul võeti aluseks tegevussektor: ";
  content3 = "Sellesse sektorisse on analüüsil paigutatud järgmised tegevusalad: ";
  content4 = "Ettevõtte suurusgrupp: ";
  content5 = "Ettevõtte tegevuspiirkond (maakond): ";
  content6 = "Majandusaasta aruande aasta, millel prognoosid põhinevad: ";

  content1a: string;
  //content1b: string;
  sectorNo: string;

  constructor() { 
  
  }
  
  
  

  ngOnInit() {

   

  }


}