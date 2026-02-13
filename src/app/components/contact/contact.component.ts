import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  email = 'beligahamullage@gmail.com';
  phone = '+94 77 563 2256';
  location = '136, Mulana, Narawala, Poddala, Galle, Sri Lanka';

  name = '';
  userEmail = '';
  message = '';

  sendMessage() {
    const now = new Date();

    const formattedTime = now.toLocaleString('en-LK', {
      timeZone: 'Asia/Colombo',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const templateParams = {
      from_name: this.name,
      from_email: this.userEmail,
      message: this.message,
      time: formattedTime,
    };

    emailjs
      .send('service_2xi2vzu', 'template_jj7up4q', templateParams, 'kujMxXbwYBrBuqUss')
      .then(() => {
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
