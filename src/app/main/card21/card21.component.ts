import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card21',
  templateUrl: './card21.component.html',
  styleUrls: ['./card21.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Card21Component implements OnInit {

  text = `utilisateurs aujourd'hui`;

  constructor() { }

  ngOnInit(): void {
  }

}
