import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];
  newUser = { name: '', email: '', password: '' };
  selectedRole = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => (this.users = data));
  }

  add(): void {
    this.userService.create(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { name: '', email: '', password: '' };
    });
  }

  update(user: any): void {
    this.userService.update(user.id, user).subscribe(() => this.loadUsers());
  }

  deleteUser(id: number): void {
    this.userService.delete(id).subscribe(() => this.loadUsers());
  }

  assignRole(userId: number): void {
    this.userService.assignRole(userId, this.selectedRole).subscribe(() => {
      this.selectedRole = 0;
      this.loadUsers();
    });
  }
}
