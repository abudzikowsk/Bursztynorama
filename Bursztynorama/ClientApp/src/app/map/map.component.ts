import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
import {latLng, MapOptions} from "leaflet";

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
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
  ngAfterViewInit(): void {
    const mapOptions: MapOptions = {
      center: [54.563554, 17.159425],
      zoom: 7
    };

    const map = L.map('map', mapOptions);
    const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);

    const locations = new Map<string, number[]>([
      ['Chłapowo', [54.803650, 18.373520]],
      ['Dziwnów', [54.028190, 14.766910]],
      ['Gdansk', [54.352050, 18.646370]],
      ['Gdynia', [54.518890, 18.531880]],
      ['Grzybowo', [54.158920, 15.485570]],
      ['Hel', [54.608140, 18.801300]],
      ['Kamień Pomorski', [53.968490, 14.772620]],
      ['Krynica Morska', [54.380510, 19.444130]],
      ['Mielno', [54.260860, 16.062100]],
      ['Mrzezyno', [54.143840, 15.291420]],
      ['Nowe Warpno', [53.722560, 14.289610]],
      ['Puck', [54.717900, 18.408410]],
      ['Sopot', [54.441800, 18.560030]],
      ['Stepnica', [53.651870, 14.625550]],
      ['Tolkmicko', [54.320380, 19.526950]],
      ['Wolin', [53.842140, 14.614650]]
    ]);

    locations.forEach((value, key) => {
      const marker = L.marker(latLng(value[0], value[1])).addTo(map);
      marker.on('click',  (e) => {
        console.log(e)
      });
    })
  }
}
