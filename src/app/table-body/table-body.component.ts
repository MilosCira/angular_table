import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss'],
})
export class TableBodyComponent implements OnInit {
  @Input() data:any;
  constructor(private dataService: DataService) {}
  editBoolean:boolean = false;
  checked:any=0;
  ngOnInit(): void {}

  openEdit() {
    this.editBoolean = !this.editBoolean;
  }
  
  //Function give checked user
  checkUserChanged(checked:any, id:any) {
    this.checked = this.dataService.changeCheckValue(checked, id);
  }
}
