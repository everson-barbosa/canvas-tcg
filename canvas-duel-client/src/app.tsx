import { useState } from 'react';
import { io, Socket } from 'socket.io-client';

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);

  function connect() {
    const newSocket = io('http://localhost:3000/duel');

    newSocket.on('connect', () => {
      console.log('Conectado:', newSocket.id);
      setConnected(true);

      newSocket.emit('join-room', {
        duelId: '123',
        playerId: 'player-1',
        deck: []
      });
    });

    newSocket.on('disconnect', () => {
      console.log('Desconectado');
      setConnected(false);
    });

    newSocket.on('card-played', (data) => {
      console.log('Carta jogada:', data);
    });

    setSocket(newSocket);
  }

  function peformAction() {
    if (!socket) return
    
    socket.emit('peform-action', {
      roomId: 'room-123',
      cardId: 'card-42',
    });
  }

  return (
    <div>
      <h1>Game Client</h1>

      {!connected ? (
        <button onClick={connect}>
          Conectar
        </button>
      ) : (
        <>
          <p>🟢 Conectado</p>

          <button onClick={peformAction}>
            Peform action
          </button>
        </>
      )}
    </div>
  );
}

export default App;