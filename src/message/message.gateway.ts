import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageService } from './message.service';

@WebSocketGateway({ namespace: 'message', cors: true })
export class MessageGateway {
  constructor(private readonly messageService: MessageService) {}

  @WebSocketServer()
  socket: Server;

  @SubscribeMessage('join')
  joinRoom(client: Socket, payload: { roomID: string }) {
    client.join(payload.roomID);
    client.emit('onJoined', { message: `joined room ${payload.roomID}` });
  }

  @SubscribeMessage('sendMessage')
  sendMessage(client: Socket, payload: { roomID: string; message: string }) {
    client.to(payload.roomID).emit('onReceived', { message: payload.message });
  }
}
