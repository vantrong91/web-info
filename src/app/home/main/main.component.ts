import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private wowService: NgwWowService,
    private modalService: NgbModal) {
    wowService.init();
  }

  ngOnInit() {
  }

  openlg(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'dark-modal' });
  }
}
