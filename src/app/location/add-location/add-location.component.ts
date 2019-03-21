import {LocationModel} from '../../model/location.model';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LocationService} from '../../service/location.service';


@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html'
})
export class AddLocationComponent {

  location: LocationModel = new LocationModel();

  constructor(private router: Router, private locationService: LocationService) {
  }

  createLocation(): void {
    this.locationService.createLocation(this.location)
      .subscribe( data => {
        alert(`Location ${data.name} created successfully.`);
      });
  }
}
