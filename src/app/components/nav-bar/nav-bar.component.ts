import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  tableNumber: number | undefined;
  tableCounter: number = 0;
  panierCounter: number = 0

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    // Count the number of tables in localStorage on component initialization
    const localStorageKeys = Object.keys(localStorage);

    for(let key of localStorageKeys) {
      const tableNumber = parseInt(key);

      if(!isNaN(tableNumber)) {
        this.tableCounter;
      }
    }
  }

  onTableNumberSelected(tableNumber: number) {
    this.tableNumber = tableNumber; // Update the tableNumber variable with the selected table number
  }

  clearTable(tableNumber: number) {
    this.localStorageService.removeItem(tableNumber.toString()); // Remove the selected table from localStorage
  }
}
