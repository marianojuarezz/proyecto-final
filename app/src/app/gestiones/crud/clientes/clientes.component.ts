import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientesService } from 'src/app/servicios/clientes-service/clientes.service';
import { NewClientComponent } from '../new-client/new-client.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
clientes: any;
backup : any;
cliente = {
  id:0,
  nombre: "",
  apellido: "",
  telegono: "",
  direccion: ""
};
buscar = "";
  constructor (
    private clienteService : ClientesService,
    private modalService : NgbModal
    ) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(response => {
      this.clientes = response;
      this.backup = response;
    })
  }

  handlerInput(event:any){
    if(event.target.value.length === 0){
      this.clientes = this.backup;
    }
  }

  filtrar() {
    let newClients = this.clientes.filter((cliente: { nombre: any; }) =>{
      return cliente.nombre.toLowerCase().includes(this.buscar.toLowerCase()) === true
    })
    this.clientes = newClients;
    
  };
  openModal(cliente:any){
    const modalRef = this.modalService.open(NewClientComponent)
    modalRef.componentInstance.cliente = cliente;
    }
  


    eliminarClient(id:any) {
      this.clienteService.deleteCliente(id).subscribe(response =>{
        let newClient = this.clientes.filter((client: { id: any; }) =>{
          return client.id !== id;
        })
        this.clientes = newClient;
      })
    };
}
