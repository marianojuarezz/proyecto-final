import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalleLamparaComponent } from '../detalle-lampara/detalle-lampara.component';

@Component({
  selector: 'app-lampara',
  templateUrl: './lampara.component.html',
  styleUrls: ['./lampara.component.css']
})
export class LamparaComponent implements OnInit {
@Input () lampara:any
  constructor(private modalService : NgbModal) { }

  ngOnInit(): void {
  
  }
  openModal() {
    const modalRef = this.modalService.open(DetalleLamparaComponent)}
}
