export interface MarkersAssetMap{
    markerid:string,
    assetId:string,
    marker:google.maps.marker.AdvancedMarkerElement
}


export interface GpsData{
  lat:Number,
  lang:Number,
  assetId:string
}


export interface AssetData{
  assetId:string,
  assetName:string,
  lastUpdateTs:number,
  onBoardingTs:number,
  isActive:boolean,
  assetTag:string,
  assetType:string
}



export interface bdy{
  CALLBACK_URL:string,
  CHANNEL_ID: string,
  CHECKSUMHASH:string,
  CUST_ID: string,
  EMAIL: string,
  INDUSTRY_TYPE_ID: string,
  MID: string,
  MOBILE_NO: string,
  ORDER_ID:string,
  TXN_AMOUNT:string,
  WEBSITE:string,
  }


  export interface Message {

from:number,
to:number;
msgBody:string,
type:MsgType,
time:number
  }

  export enum MsgType{
    GPSDATA,
    NONGPSDATA
  }