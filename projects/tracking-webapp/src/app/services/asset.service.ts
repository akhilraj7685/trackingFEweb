import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetData } from '../dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  constructor(private http:HttpClient) { }

 backendURL = "http://localhost:8080/iotgw/asset/";


 getAssetByAssetId(assetId:string):Observable<AssetData>{
  return this.http.get<AssetData>(this.backendURL+"getAsset/"+assetId);
 }


}
