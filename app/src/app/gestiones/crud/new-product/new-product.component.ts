import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LamparasService } from 'src/app/servicios/lamparas-service/lamparas.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
@Input() lampara:any
  

id= 0;
  constructor(private productoService : LamparasService,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    
  }


  guardar(){
    this.productoService.postLampara(this.lampara).subscribe(response =>{
      
    })
  }
  
}
