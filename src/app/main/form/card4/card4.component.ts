import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Card4Component implements OnInit {

	profileForm = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
	  });

  text = `Envoyer un rapport`;

  value = ``;

  options = [
  	{
  		value: 'option 1',
  		label: 'Option 1'
  	},
  	{
  		value: 'option 2',
  		label: 'Option 2'
  	}
  ];

  value1 = ``;

  options1 = [
  	{
  		value: 'option 1',
  		label: 'Option 1'
  	},
  	{
  		value: 'option 2',
  		label: 'Option 2'
  	}
  ];

  value2 = ``;

  value3 = ``;

  value4 = ``;

  value5 = ``;

  options2 = [
  	{
  		value: '5',
  		label: '😄 - Très bon'
  	},
  	{
  		value: '4',
  		label: '🙂 - Plutôt bon'
  	},
  	{
  		value: '3',
  		label: '😐 - Moyen',
  		id: '16070286204020.9593424236270623'
  	},
  	{
  		value: '2',
  		label: '😞 - Plutôt mauvais',
  		id: '16070286424790.9384556549444814'
  	},
  	{
  		value: '1',
  		label: '🤮 - Très mauvais',
  		id: '16070286816200.9425841637176223'
  	}
  ];

  value6 = ``;

  options3 = [
  	{
  		value: 'bad',
  		label: 'Drapeau rouge'
  	},
  	{
  		value: 'medium',
  		label: 'Drapeau orange'
  	},
  	{
  		value: 'bad',
  		label: 'Drapeau  vert',
  		id: '16070292726800.80780001942723'
  	}
  ];

  value7 = ``;

  options4 = [
  	{
  		value: 'sunny',
  		label: '☀️ -  Ensolleillé'
  	},
  	{
  		value: 'cloudsun',
  		label: '⛅ -  Eclaircies'
  	},
  	{
  		value: 'cloud',
  		label: '☁️ - Nuageux',
  		id: '16070294659690.7604445099942718'
  	},
  	{
  		value: 'rainy',
  		label: '🌧️ - Pluvieux',
  		id: '16070295159090.7412451384283244'
  	},
  	{
  		value: 'orage',
  		label: '🌩️ - Orageux',
  		id: '16070295509360.40483794114154303'
  	}
  ];

  value8 = ``;

  text1 = `Envoyer mon rapport`;
  myArray: any[] = [];

  form = new FormGroup({
	newValue: new FormControl('')
})

onSubmit() {
	this.firestore.collection('testCollection').add({
		field: this.form.value.newValue
	})
	.then(res => {
		console.log(res);
		this.form.reset();
	})
	.catch(e => {
		console.log(e);
	})
}
  
  constructor(private firestore: AngularFirestore) { 

	this.firestore.collection('testCollection').add({field: this.form.value.newValue})
	
  }

  ngOnInit(): void {
  }

}
