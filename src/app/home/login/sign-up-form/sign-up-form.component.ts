import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent implements OnInit {

  value = ``;

  value1 = ``;

  text = `Pas encore de compte ? S'inscrire`;

  queryParams = [
  	{
  		name: '',
  		value: ''
  	}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
