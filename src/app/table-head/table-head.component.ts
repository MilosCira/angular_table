import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss'],
})
export class TableHeadComponent implements OnInit {
  constructor(private dataService: DataService) {}
  @Output('inputChanged') inputChanged = new EventEmitter<any>();

  openSearchBar:boolean=false;
  showModal:boolean=false;

  ngOnInit(): void {}

  //Function send property for search
  searchOption(search:any) {
    
    this.dataService.searchData(search.target.value);   
    
    return this.inputChanged.emit();
  }
  

  //function hide and show input for search
  toggleSearchBar(){
    this.openSearchBar= !this.openSearchBar;
    console.log(this.openSearchBar);
    
  }
}
