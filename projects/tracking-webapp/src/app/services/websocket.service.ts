import { Message } from '../dto';

import { AnonymousSubject } from 'rxjs/internal/Subject';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable, Observer, Subject } from 'rxjs';
import *as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {


  newMsgEventEmitter= new EventEmitter<number>();

  emitNavChangeEvent(count:number) {
    this.newMsgEventEmitter.emit(count);
  }
  getnewMsgEventEmitter() {
    return this.newMsgEventEmitter;
  }


 msgStackCount:number=0;
 //CHAT_URL = "wss://api.miloxiv.com/chat/";
 CHAT_URL = "ws://localhost:8080/chat/";
 msgList:Message[]=[];


subject!: AnonymousSubject<MessageEvent>;
public messages!: Subject<Message>;

  constructor() {
   console.log("====================")
   
}


public createConnection(){
  this.messages = <Subject<Message>>this.connect(this.CHAT_URL+"123").pipe(
    map(
        (response: MessageEvent<Message>): Message => {
            console.log(response.data);
            //let data = JSON.parse(response.data)
            return response.data;
        }
    )
);
}


   public connect(url:any): AnonymousSubject<MessageEvent<Message>> {
    if (!this.subject) {
        this.subject = this.create(url);
        console.log("Successfully connected: " + url);
        this.subject.next(new MessageEvent<Message>("hello"));

    }
    return this.subject;
}

private create(url:any): AnonymousSubject<MessageEvent<Message>> {
    let ws = new WebSocket(url);
    let observable = new Observable((obs: Observer<MessageEvent<Message>>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
    });
    let observer ={
        error: null,
        complete:()=>{console.log("closed======")},
        next: (data: MessageEvent<Message>) => {
            console.log('Message sent to websocket: ', data);
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(data.type);
            }
        }
    };
    return Rx.Subject.create(observer, observable);











}


ggg(){
  this.subject.subscribe({
    next:(data)=>{

      var receivedMsg:Message=JSON.parse(data.data);
      this.msgList.push(receivedMsg);
      console.log(receivedMsg);
      //console.log("length---"+this.msgList.length);
      this.msgStackCount=this.msgStackCount+1;


      this.emitNavChangeEvent(this.msgStackCount);
    }
  });
}



sendMessage(msg:Message){

  if(this.subject==undefined){
    this.createConnection();
  }
  this.subject.next(new MessageEvent<Message>(JSON.stringify(msg)));
}




getSubject(){
  return this.subject;
}




unsubscribe(){
  this.subject.unsubscribe();
}

getMsgCount(){
  return this.msgStackCount;
}


getMsgList(){

  return this.msgList;
}


setMsgList(messages:Message[]){
  this.msgList=messages;
}
}
