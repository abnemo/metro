import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { IAddress } from '../../interfaces/address.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MapsService {

  private mapsAPI: string = 'http://maps.googleapis.com/maps/api/geocode/json';

  constructor(private http: Http) {
  }

  getLatLngFromAddress(address: IAddress) {
    const params: URLSearchParams = new URLSearchParams();
    params.set('address', address.streetName + ' ' + address.zip + ' ' + address.city);
    // params.set('sensor', <string>false);

    return this.http
      .get(this.mapsAPI, {
        search: params
      })
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(response: Response) {
    return response.json();
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}


