import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {}

  @Input() allTags!: any[];
  @Output() newTagEvent = new EventEmitter<string>(true);


  public filterProductsWithTag() {
     this.newTagEvent.emit();
  }

  public toggleSelected(tag: any) {

    return tag.isSelected = !tag.isSelected;

  }

}
