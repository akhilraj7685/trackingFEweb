import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { AssetData, MarkersAssetMap, Message, MsgType} from "../dto";
import { WebsocketService } from "../services/websocket.service";
import { every } from "rxjs";
import { AssetService } from "../services/asset.service";


@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrl: './googlemap.component.css'
})
export class GooglemapComponent implements OnInit{

  constructor(private webs:WebsocketService,private assetservice:AssetService) {
  webs.createConnection();
  }
 
  map!:google.maps.Map;

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  mapId = "akhil123456"
  assetMarkerRecords:MarkersAssetMap[]=[];
  mapheight=window.innerHeight;
  mapwidth=window.innerWidth-5;
  infowindow = new google.maps.InfoWindow({

  });

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
      title:databody.assetId,
      content:this.getMarkerIcon().element
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

    marker.addListener("click",()=>{
     let asset:AssetData;
     this.assetservice.getAssetByAssetId(databody.assetId).subscribe({
      complete:()=>{
        
       let content="<div> <ul>assetId:"+asset.assetId+"</ul><ul>assetName:"+asset.assetName+"</ul><ul>onborded:"+asset.onBoardingTs+"</ul> <ul>assetType:"+asset.assetType+"</ul> <ul>driver:Mohan</ul>   </div>"
       this.infowindow.setContent(content);
        this.infowindow.open({
          anchor: marker,
        });
      },
      next(value) {
        asset=value;
      },
      error(err) {
        console.log(err)
      },
     });
      
    })

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


   
  getMarkerIcon():google.maps.marker.PinElement {
         // A marker with a custom SVG glyph.
const glyphImg = document.createElement('img');
glyphImg.src="../../assets/car.svg"
glyphImg.width=50



    let pinBackground = new google.maps.marker.PinElement({
  glyph: glyphImg,
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



  getMarkerByMarkerId(assetId:string){
    let record = this.assetMarkerRecords.find(rec=>rec.assetId==assetId);
     return record?.marker;
  }



}
