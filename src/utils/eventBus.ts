import mitt, {Emitter} from 'mitt'

export type Event = {
    topic: string,
    data?: any
}
export const Bus:Emitter<Event> = mitt<Event>();


