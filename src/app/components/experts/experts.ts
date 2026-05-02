import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experts',
  imports: [CommonModule],
  templateUrl: './experts.html',
  styleUrl: './experts.scss',
})
export class Experts {
  users1 = [
    { img: 'user1.jpg' },
    { img: 'user2.jpg' },
    { img: 'user3.jpg' },
  ];
  users2 = [
    { img: 'user4.jpg' },
    { img: 'user3.jpg' },
    { img: 'user2.jpg' },
  ];
  users3 = [
    { img: 'user3.jpg' },
    { img: 'user1.jpg' },
    { img: 'user4.jpg' },

  ];
  getTransform(i: number, total: number, name: string): string {
    let middle = Math.floor(total / 2);
    let Y;

    if (name == 'users1') {
      if (window.innerWidth >= 650 && window.innerWidth < 850) {
        Y = -50
      }else if ( window.innerWidth < 650) {
        Y = -0
      }
       else {
        Y = -70
      }
    } else if (name == 'users2') {
      if (window.innerWidth >= 650 && window.innerWidth < 850) {
        Y = -100
      }
      else if ( window.innerWidth < 650) {
        Y = -10
      } else {
        Y = -140
      }
    } else {
      if (window.innerWidth >= 650 && window.innerWidth < 850) {
        Y = -145
      } else if (window.innerWidth < 650) {
        Y = -20
      } else {
        Y = -210
      }
    }
    if (i !== middle) {
      return `translateY(${Y}px)`;
    } else {
      if (window.innerWidth >= 650 && window.innerWidth < 850) { return `translateY(20px)`; } else { return `translateY(15px)`; }
    }
  }
}
