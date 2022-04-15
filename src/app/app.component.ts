import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test-app';

  constructor(private dataService: DataService) {}

  dataUser!:any[];

  ngOnInit(): void {
  }
 
  getData(){
    this.dataUser= this.dataService.fillteredData;
      
  }
}
