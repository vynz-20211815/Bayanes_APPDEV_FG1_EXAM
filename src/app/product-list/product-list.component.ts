import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productlist = [
    { id: 1, name: "Stethoscopes", price: 7500, stock: 10 },
    { id: 2, name: "PPE Bundle", price: 4500, stock: 10 },
    { id: 3, name: "Phlebotomy kits", price: 2500, stock: 10 },
    { id: 4, name: "First Aid Kit", price: 1500, stock: 10 },
    { id: 5, name: "Microscope", price: 12500, stock: 10 },
  ]
}
