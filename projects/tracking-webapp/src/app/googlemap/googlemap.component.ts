import { Component, ElementRef, ViewChild } from "@angular/core";
import { MarkersAssetMap} from "../dto";

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrl: './googlemap.component.css'
})
export class GooglemapComponent {
  @ViewChild('gmpp',{static:true}) mapElementRef!: ElementRef;
  constructor() {}
 
   map!:google.maps.Map;

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  mapId = "akhil123456"
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  assetMarkerRecords:MarkersAssetMap[]=[];
  positions:google.maps.LatLngLiteral[]=[
    { lat: 24, lng:12 },{ lat: 23, lng: 12 },{ lat: 22, lng: 12 } 
  ]
  index=0;

  addMarker(event: any) {
    
    console.log(event);
    let marker = new google.maps.marker.AdvancedMarkerElement({
    map: this.map,
    position:this.positions[this.index],
    gmpDraggable: true,
    // content: markerPin.element,
    title:"heloooo"
  });
  this.index++;
  let record={} as MarkersAssetMap;
  record.assetId="Asset1";
  record.markerid=marker.title;
  record.marker=marker;
  this.assetMarkerRecords.push(record);

  console.log(this.assetMarkerRecords)
  
  }

  onMapReady(eve:google.maps.Map){
    console.log(eve);
    this.map=eve;
  }

  
}
