import { Component, OnInit, ChangeDetectionStrategy , Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

interface Ping {
  commentaire: string;
  heure_debut: number;
  heure_fin: number;
  lat: number;
  long: number;
  meteo: string;
  qualite_eau: string;
  region: string;
  ressenti: string;
  surfer: string;
  ville: string;
}

@Component({
  selector: 'app-card111',
  templateUrl: './card111.component.html',
  styleUrls: ['./card111.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Card111Component implements OnInit {

  text = `HUMEUR DES SURFEURS`;
  snapshot: any;
  ressentis: number [] = [];
  i: number;
  average: number;

  dataCollection: AngularFirestoreCollection<Ping>;
  datas: Observable<Ping[]>;

  constructor(private fs: AngularFirestore) {
      this.i = 0;
      this.dataCollection = this.fs.collection('reports');
      this.datas = this.dataCollection.valueChanges();
      this.datas.subscribe(val => {
 
        for (let data in val){
          this.ressentis.push(parseInt(val[this.i]["ressenti"]));
          console.log(parseInt(val[this.i]["ressenti"]))
          this.i+=1;
          
        }

        var totalSum = 0;
      for(var i in this.ressentis) {
          totalSum += this.ressentis[i];
      }
       
      //Work out how many numbers are
      //in our array.
      var numsCnt = this.ressentis.length;
       
      //Finally, get the average.
      var average = totalSum / numsCnt;
      this.average = average;
      });
    
  
   }

  ngOnInit(): void {
  }

}
