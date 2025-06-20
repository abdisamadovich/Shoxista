import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatIconModule],
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  services = [
    { title: 'Uzuklar', desc: 'Zamonaviy va klassik uslubdagi uzuklar: har bir ayol uchun o‘ziga xos dizayn va sifatli materiallar.', icon: 'diamond' },
    { title: 'Marjonlar', desc: 'Nozik va nafis marjonlar: kundalik va bayramona ko‘rinish uchun.', icon: 'necklace' },
    { title: "Sirg'alar", desc: "Turli shakl va rangdagi sirg'alar: zamonaviy va klassik kolleksiya.", icon: 'earbuds' },
    { title: 'Soatlar', desc: 'Ayollar uchun elegant va zamonaviy soatlar: ishonch va uslub ramzi.', icon: 'watch' },
    { title: 'Broshlar', desc: 'Noyob broshlar: har bir libosga o‘ziga xoslik va nafislik qo‘shadi.', icon: 'star' },
    { title: "Sovg'alar", desc: "Maxsus tadbirlar va bayramlar uchun original sovg‘a to‘plamlari.", icon: 'redeem' }
  ];
  features = [
    { title: 'Yuqori sifat', desc: "Barcha mahsulotlarimiz xalqaro sifat standartlariga javob beradi va sinovdan o‘tgan.", icon: 'check_circle' },
    { title: 'Tez yetkazib berish', desc: "O‘zbekiston bo‘ylab 1-3 kun ichida tez va xavfsiz yetkazib berish.", icon: 'local_shipping' },
    { title: 'Qulay narxlar', desc: "To‘g‘ridan-to‘g‘ri ishlab chiqaruvchidan — eng yaxshi narx va chegirmalar.", icon: 'attach_money' },
    { title: 'Individual yondashuv', desc: "Har bir mijoz uchun shaxsiy maslahat va xizmat.", icon: 'person' }
  ];
}