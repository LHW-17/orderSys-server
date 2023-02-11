import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { WebsocketService } from './websocket.service';
import { CreateWebsocketDto } from './dto/create-websocket.dto';
import { UpdateWebsocketDto } from './dto/update-websocket.dto';
import { Server } from 'socket.io';

@WebSocketGateway()
export class WebsocketGateway {
  constructor(private readonly websocketService: WebsocketService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('hello')
  create(@MessageBody() createWebsocketDto: CreateWebsocketDto) {
    console.log(createWebsocketDto);

    return this.websocketService.create(createWebsocketDto);
  }

  @SubscribeMessage('findAllWebsocket')
  findAll() {
    return this.websocketService.findAll();
  }

  @SubscribeMessage('findOneWebsocket')
  findOne(@MessageBody() id: number) {
    return this.websocketService.findOne(id);
  }

  @SubscribeMessage('updateWebsocket')
  update(@MessageBody() updateWebsocketDto: UpdateWebsocketDto) {
    return this.websocketService.update(
      updateWebsocketDto.id,
      updateWebsocketDto,
    );
  }

  @SubscribeMessage('removeWebsocket')
  remove(@MessageBody() id: number) {
    return this.websocketService.remove(id);
  }
}
