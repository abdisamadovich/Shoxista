import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  loading = false;
  successMessage = '';
  errorMessage = '';

  async onSubmit() {
    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';
    try {
      // EmailJS orqali yuborish
      // window.emailjs ni chaqirish uchun EmailJS skriptini index.html ga ulash kerak
      await (window as any).emailjs.send(
        'service_whexak6', // EmailJS service ID
        'Ytemplate_6fdystu', // EmailJS template ID
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          message: this.formData.message
        },
        'ImCTrEXgiZo_PzwBL' // EmailJS public key
      );
      this.successMessage = 'Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.';
      this.resetForm();
    } catch (err) {
      this.errorMessage = 'Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq urinib ko\'ring.';
    } finally {
      this.loading = false;
      setTimeout(() => {
        this.successMessage = '';
        this.errorMessage = '';
      }, 7000);
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}