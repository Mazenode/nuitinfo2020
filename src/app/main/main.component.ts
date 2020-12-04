import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  dataCollection: AngularFirestoreCollection<Ping>;
  datas: Observable<Ping[]>;

  constructor(private fs: AngularFirestore) {
      this.dataCollection = this.fs.collection('reports');
      this.datas = this.dataCollection.valueChanges();

   }

  ngOnInit(): void {
  }

}
