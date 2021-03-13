import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')nameInputRef: ElementRef;
 @ViewChild('amountInput') amountInputRef: ElementRef;


  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(): void{
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value);
    this.shoppinglistService.addIngredient(newIngredient);
  }

}
