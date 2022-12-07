import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  typesOfShoes: string[] = ['Sorvete de Iogurte - $5.00', 'Sanduíche de sorvete - $10.00', 'Bomba de Chocolate - $7.00', 'Cupcake - $5.00', 'Pão de gengibre - $3.00'];

}
export class ListSingleSelectionExample {
}