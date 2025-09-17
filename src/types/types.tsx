export enum MessagePosition {
    LEFT,
    RIGHT
}

export type Message = {
    position: MessagePosition,
    content: string,
    dateTime: Date
}

export type ResponseMessage = {
    role: "user",
    content: string
}