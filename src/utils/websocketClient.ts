import {Socket, io} from 'socket.io-client';

class WebSocketClient {
    private socket: Socket | null = null;

    public connect(url: string): void {
        this.socket = io(url);

        this.socket.on('connect', () => {
            console.log('Connected to WebSocket server', this.socket!.id);
        });

        this.socket.on('disconnect', () => {
            console.log('Disconnected from WebSocket server');
        });
    }

    public disconnect(): void {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
    }

    // 订阅服务器事件
    public on(eventName: string, callback: (...args: any[]) => void): void {
        if (this.socket) {
            this.socket.on(eventName, callback);
        }
    }

    // 向服务器发送信息
    public send(eventName: string, ...args: any[]): void {
        if (this.socket) {
            this.socket.emit(eventName, ...args);
        }
    }
}

export default WebSocketClient;