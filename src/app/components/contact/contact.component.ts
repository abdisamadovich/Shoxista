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

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Xabaringiz yuborildi! Tez orada siz bilan bog\'lanamiz.');
    this.resetForm();
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