import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainerComponent implements OnInit {

  value = ``;

  value1 = ``;

  text = `Pas encore de compte ? S'inscrire`;

  queryParams = [
  	{
  		name: '',
  		value: ''
  	}
  ];

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
