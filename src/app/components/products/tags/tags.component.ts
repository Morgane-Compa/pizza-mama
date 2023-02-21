import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Input() allTags!: string[];
  @Output() newTagEvent = new EventEmitter<string>();


  public filterProductsWithTag(value: string) {
    this.newTagEvent.emit(value);
  }

}
