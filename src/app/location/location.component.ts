import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LocationService} from '../service/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html'
})
export class LocationComponent {
  latitudeToFind: number;
  longitudeToFind: number;
  name: string;


  constructor(private router: Router, private locationService: LocationService) {
  }

  find(): void {
    this.locationService.findLocation(this.latitudeToFind, this.longitudeToFind).subscribe(data =>
        this.name = data,
      () => alert('No locations in database'));
  }

}
