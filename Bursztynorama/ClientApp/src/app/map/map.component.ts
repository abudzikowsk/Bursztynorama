import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';
import * as L from 'leaflet';
import {latLng, MapOptions} from "leaflet";

const iconRetinaUrl = 'assets/icons/amber-marker-icon-2x.png';
const iconUrl = 'assets/icons/amber-marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit{
  @Output() cityIdChangedEvent = new EventEmitter<string>();

  ngAfterViewInit(): void {
    const mapOptions: MapOptions = {
      center: [54.563554, 17.159425],
      zoom: 7
    };

    const map = L.map('map', mapOptions);
    const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);

    const locations = new Map<string, number[]>([
      ['Chłapowo', [54.803650, 18.373520, 0]],
      ['Dziwnów', [54.028190, 14.766910, 1]],
      ['Gdansk', [54.352050, 18.646370, 2]],
      ['Gdynia', [54.518890, 18.531880, 3]],
      ['Grzybowo', [54.158920, 15.485570, 4]],
      ['Hel', [54.608140, 18.801300, 5]],
      ['Kamień Pomorski', [53.968490, 14.772620, 6]],
      ['Krynica Morska', [54.380510, 19.444130, 7]],
      ['Mielno', [54.260860, 16.062100, 8]],
      ['Mrzezyno', [54.143840, 15.291420, 9]],
      ['Nowe Warpno', [53.722560, 14.289610, 10]],
      ['Puck', [54.717900, 18.408410, 11]],
      ['Sopot', [54.441800, 18.560030, 12]],
      ['Stepnica', [53.651870, 14.625550, 13]],
      ['Tolkmicko', [54.320380, 19.526950, 14]],
      ['Wolin', [53.842140, 14.614650, 15]],
    ]);

    locations.forEach((value, key) => {
      const marker = L.marker(latLng(value[0], value[1]), {
        title: value[2].toString(),
      }).addTo(map);

      marker.on('click',  (e) => {
        //@ts-ignore
        this.cityIdChangedEvent.emit(e.originalEvent.target.title);
      });
    })
  }
}
