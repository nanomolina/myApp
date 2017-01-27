import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { PatentService } from '../../services/patent';
import _ from 'underscore';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PatentService]
})
export class HomePage {
   time: String;
   patent: String;
   public dataPatent;
   public debtPatent;
   dataJson: any;

  constructor(public navCtrl: NavController, private patentService: PatentService) {
    this.time = (new Date()).toLocaleString();
    this.getDataPatent();
    this.getDebtPatent();
  }

  getDataPatent() {
    this.patentService.getDataPatent().subscribe(
        data => {
            this.dataPatent = data.json();
        },
        err => console.error(err),
        () => console.log('getDataPatent completed')
    );
  }

  getDebtPatent() {
    this.patentService.getDebtPatent().subscribe(
        data => {
            this.debtPatent = data.json();
        },
        err => console.error(err),
        () => console.log('getDebtPatent completed')
    );
  }

  searchPatent() {
    this.navCtrl.push(DetailPage);
    //
    // this.dataJson = _.filter(this.dataPatent, function(obj: any) {
    //   return obj.Datos.Dominio == this.patent;
    // });

  }

}
