import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  email = 'beligahamullage@gmail.com';
  phone = '+94 77 563 2256';
  location = '136, Mulana, Narawala, Poddala, Galle, Sri Lanka';
}
