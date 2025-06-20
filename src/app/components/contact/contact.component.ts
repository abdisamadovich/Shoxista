import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  successMessage = '';

  onSubmit() {
    // Bu yerda haqiqiy email yuborish backend orqali bo'ladi, hozircha faqat xabar chiqadi
    this.successMessage = 'Xabaringiz shoxista@gmail.com ga yuborildi! Tez orada siz bilan bog\'lanamiz.';
    this.resetForm();
    setTimeout(() => this.successMessage = '', 7000);
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}