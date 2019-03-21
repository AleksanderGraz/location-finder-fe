import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LocationModel} from '../model/location.model';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class LocationService {

  constructor(private http: HttpClient) {
  }

  private userUrl = '//localhost:8080/location';

  public findLocation(latitude: number, longitude: number): Observable<string> {
    return this.http.get<string>(`${this.userUrl}/latitude/${latitude}/longitude/${longitude}`, {responseType: 'text' as 'json'});
  }

  public createLocation(location) {
    return this.http.post<LocationModel>(this.userUrl, location);
  }

}
