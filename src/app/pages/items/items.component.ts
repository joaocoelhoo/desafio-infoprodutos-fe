import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  isLoading = true;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe({
      next: (data) => {
        this.items = data;
        this.isLoading = false;
      },
      error: (err: Error) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }
}
