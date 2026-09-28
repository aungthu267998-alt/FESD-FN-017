import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'FESD-FN-017';

  // Form Model
  userEmail = '';
  userPassword = '';
  userFirstName = '';
  userLastName = '';
  userTel = '';
  dateOfBirth = '';

  // User List Data
  users: User[] = [
    new User({
      userEmail: 'somchai@example.com',
      userFirstName: 'Somchai',
      userLastName: 'Jaidee',
      userTel: '0812345678',
      dateOfBirth: '1995-03-15'
    }),
    new User({
      userEmail: 'saree@example.com',
      userFirstName: 'Saree',
      userLastName: 'Suksawat',
      userTel: '0898765432',
      dateOfBirth: '2000-11-20'
    })
  ];

  // Feedback Alert State
  alertMessage = '';
  alertType = '';
  httpStatus = '';

  onSubmit() {
    if (!this.userEmail || !this.userPassword || !this.userFirstName || !this.userLastName || !this.userTel || !this.dateOfBirth) {
      this.httpStatus = '400 Bad Request';
      this.alertMessage = 'Please fill in all required fields.';
      this.alertType = 'danger';
      return;
    }

    try {
      const newUser = new User({
        userEmail: this.userEmail,
        userPassword: this.userPassword,
        userFirstName: this.userFirstName,
        userLastName: this.userLastName,
        userTel: this.userTel,
        dateOfBirth: this.dateOfBirth
      });

      newUser.getAge();

      this.users.push(newUser);
      this.httpStatus = '201 Created';
      this.alertMessage = 'User registered successfully!';
      this.alertType = 'success';

      this.resetForm();
    } catch (err: any) {
      this.httpStatus = '422 Unprocessable Entity';
      this.alertMessage = `Validation Error: ${err.message}`;
      this.alertType = 'danger';
    }
  }

  resetForm() {
    this.userEmail = '';
    this.userPassword = '';
    this.userFirstName = '';
    this.userLastName = '';
    this.userTel = '';
    this.dateOfBirth = '';
  }
}