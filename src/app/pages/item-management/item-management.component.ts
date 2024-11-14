import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-item-management',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './item-management.component.html',
  styleUrl: './item-management.component.css'
})
export class ItemManagementComponent implements OnInit {
  items: any[] = [];
  newItem = { name: '', description: '', price: 0.00 };

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getItems().subscribe((data) => (this.items = data));
  }

  add(): void {
    this.itemService.create(this.newItem).subscribe(() => {
      this.loadItems();
      this.newItem = { name: '', description: '', price: 0 };
    });
  }

  update(item: any): void {
    this.itemService.update(item.id, item).subscribe(() => this.loadItems());
  }

  delete(id: number): void {
    this.itemService.delete(id).subscribe(() => this.loadItems());
  }
}
