import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { BkLayout } from '@uibakery/kit';
import { AuthService } from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  

  defaultLayout: BkLayout = {
    paddings: {
      paddingTop: 16,
      paddingRight: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingTopUnit: "px",
      paddingRightUnit: "px",
      paddingBottomUnit: "px",
      paddingLeftUnit: "px"
    },
    header: true,
    sidebar: false
  };

  layout$: Observable<BkLayout> = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.router.routerState.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.snapshot.data['layout'] || this.defaultLayout;
      }),
      shareReplay(),
    );

  padding$: Observable<string> = this.layout$
    .pipe(
      map((layout: BkLayout) => this.getPaddingCssValue(layout.paddings)),
    );

  items = [
  	{
  		title: 'Home',
  		link: '/home',
  		children: [
  			{
  				title: 'Login',
  				link: '/home/Login'
  			},
  			{
  				title: 'Signup',
  				link: '/home/Signup'
  			}
  		]
  	},
  	{
  		title: 'Main',
  		link: '/Main',
  		children: [
  			{
  				title: 'Form',
  				link: '/Main/Form'
  			}
  		]
  	}
  ];

  constructor(private router: Router, public authService: AuthService) {
    
  }
  

  private getPaddingCssValue(paddings): string {
    return `${paddings.paddingTop}${paddings.paddingTopUnit} ` +
           `${paddings.paddingRight}${paddings.paddingRightUnit} ` +
           `${paddings.paddingBottom}${paddings.paddingBottomUnit} ` +
           `${paddings.paddingLeft}${paddings.paddingLeftUnit}`;
  }
}
