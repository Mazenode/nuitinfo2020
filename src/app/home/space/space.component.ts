import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpaceComponent implements OnInit {

  text = `Parce que ça ne doit pas rester qu'une mauvaise expérience ...`;

  text1 = `Otites, gastro-entérites, irritations cutanées, trois maladies qu’un tiers des surfeur·euse·s ont déjà
  affirmé avoir eu après une session de surf. Tout au long de l’année, les eaux dans lesquelles les
  surfeurs pratiquent leur sport favori sont soumises à des pollutions de deux types : bactériologiques
  et chimiques.`;

  text2 = `N'attendez pas !! Aidez les autres surfeurs à prendre connaissance des difficultés que vous avez rencontré, et faîtes un rapport à notre équipe pour nous aider à plaidoyer en faveur de la qualité des eaux de baignade.`;

  text3 = `Grâce à CleanBeach, vous pourrez également voir les information des surfeurs qui vous ont précédés, ainsi que leur conseils et leur ressenti sur une plage en particulier.`;

  constructor() { }

  ngOnInit(): void {
  }

}
