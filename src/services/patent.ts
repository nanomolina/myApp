import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import _ from 'underscore';

@Injectable()
export class PatentService {
    constructor(private http: Http) {
    }

    getDataPatent() {
        let dataPatent = this.http.get(`data/oran_automotores_datos.json`);
        return dataPatent;
    }

    getDebtPatent() {
        let debtPatent = this.http.get(`data/oran_automotores_deuda.json`);
        return debtPatent;
    }

    searchPatent(list, patent) {
      let dataJson = _.filter(list, function(obj: any): boolean {
        return obj.Datos.Dominio == patent;
      });
      return dataJson;
    }
}
