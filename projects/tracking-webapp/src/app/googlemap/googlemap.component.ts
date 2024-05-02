import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MarkersAssetMap, Message, MsgType} from "../dto";
import { WebsocketService } from "../services/websocket.service";
import { every } from "rxjs";

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrl: './googlemap.component.css'
})
export class GooglemapComponent implements OnInit{

  constructor(private webs:WebsocketService) {
  webs.createConnection();
  }
 
  map!:google.maps.Map;

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  mapId = "akhil123456"
  assetMarkerRecords:MarkersAssetMap[]=[];
  

  addMarker(gpsData:Message) {
    if(gpsData.type.toString()!="GPSDATA"){
      return;
    }
    let databody = JSON.parse(gpsData.msgBody);
    console.log(gpsData);
    let marker:google.maps.marker.AdvancedMarkerElement |undefined= this.getMarkerByAssetId(databody.assetId);
    if(marker==undefined){
      marker = new google.maps.marker.AdvancedMarkerElement({
      map: this.map,
      position:{ lat: Number.parseFloat(databody.lat), lng: Number.parseFloat(databody.lang) },
      gmpDraggable: true,
      // content: markerPin.element,
      title:"heloooo",
      content:this.getRandomColor().element
    });
    let record={} as MarkersAssetMap;
  record.assetId=databody.assetId;
  record.markerid=marker.title;
  record.marker=marker;
  this.assetMarkerRecords.push(record);
    }
    else{
      marker.position={ lat: Number.parseFloat(databody.lat), lng: Number.parseFloat(databody.lang) };
    }
  
  
  console.log(this.assetMarkerRecords)
  
  }

  getMarkerByAssetId(assetId:string){
    let record = this.assetMarkerRecords.find(rec=>rec.assetId==assetId);
     return record?.marker;
  }

  onMapReady(eve:google.maps.Map){
    console.log(eve);
    this.map=eve;
  }

  ngOnInit(): void {
    this.getSubject(); 
  }


   
  getRandomColor():google.maps.marker.PinElement {
    let pinBackground = new google.maps.marker.PinElement({
      background: this.colorCodes.pop(),
     });
     return pinBackground;
  }

  colorCodes:string[]=[
    "#4287f5","#0c0c0d","#01183d","#0c3d01","#38f00e","#061c01"
  ]
 

  getSubject(){
    this.webs.getSubject().subscribe({
      next:(data)=>{
        var receivedMsg:Message=JSON.parse(data.data);
        console.log(receivedMsg.msgBody)
          this.addMarker(receivedMsg);
      }
    });
  }
}
