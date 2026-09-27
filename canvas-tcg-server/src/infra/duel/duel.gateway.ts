import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Socket } from "socket.io";

@WebSocketGateway()
export class DuelGateway {
  @SubscribeMessage("duels:join")
  handleJoinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() roomId: string,
  ) {
    client.join(roomId);

    return {
      event: "joined-room",
      data: { roomId },
    };
  }
}