import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  text = `Eleanor, you have an appointment scheduled with Dr. Jin at 10:30 tomorrow morning. Please be sure to arrive at 1010 A Street in Boston 15 minutes early!`;

  text1 = `Hello, your rent payment for Jan 19 has been received. $1,300 will be drafted from your Wells Fargo Account ******0000 within 24-48 business hours. Thank you!`;

  text2 = `Congrats on your tenth purchase! Enjoy a free cup of coffee and one pastry item on us by showing the cashier this text message!`;

  constructor() { }

  ngOnInit(): void {
  }

}
