import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})

export class WebsocketService {

  public socketStatus = false;


  constructor(
    private socket: Socket
  ) {
    this.checkStatus();
   }


    // Metodo chekar estado de conexion
    checkStatus() {

      this.socket.on('connect', () => {
        this.socketStatus = true;
      });
      
      this.socket.on('disconnect', () => {
        this.socketStatus = false
      });

    }


    // Hacer emisiones de un evento
    emit( evento: string, payload?: any, callback?: Function ) {

      console.log('Emitiendo', evento);
      // emit('EVENTO', payload, callback?)
      this.socket.emit( evento, payload, callback );

    }


    // escucha eventos - Video 30
    listen( evento: string ) {

      return this.socket.fromEvent( evento );  // regresa un Observable

    }
    

}
