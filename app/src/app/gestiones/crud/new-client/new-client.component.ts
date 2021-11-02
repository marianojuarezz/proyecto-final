import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientesService } from 'src/app/servicios/clientes-service/clientes.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  @Input() cliente : any;
  
  
  constructor(private modalService : NgbActiveModal,
    private clienteService : ClientesService) { }

  ngOnInit(): void {
    console.log(this.cliente)
  }

closeModal() {
  this.modalService.close()
};


guardar(){
  if (this.cliente.id === 0){
    this.clienteService.postCliente(this.cliente).subscribe(response =>{
      this.closeModal();
      console.log(this.guardar)
     });
  }
  else {
    this.clienteService.putCliente(this.cliente).subscribe(response => {
      this.closeModal();
    });
  }
}

}
