"use client"
import { Message, MessagePosition, ResponseMessage } from "@/types/types"
import { useEffect, useRef, useState } from "react"
import MessageBox from "./components/MessageBox"
import ChatTextField from "./components/ChatTextField"
import Loading from "./components/Loading"
import { Mistral } from '@mistralai/mistralai';
import Error from "./components/Error"
import { preprompt } from "@/repository/preprompt"

const ChatSection = () => {
  const apiKey = process.env.NEXT_PUBLIC_MISTRAL_API_KEY;
  const client = new Mistral({ apiKey: apiKey });
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([])
  const [userText, setUserText] = useState<string>("")
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const loadNextMessage = async () => {
    if (isLoading) { return }
    setHasError(false)
    setIsLoading(true)
    try {
      let requestMessage: ResponseMessage[] = []
      if (messages.length === 0) {
        const newMessage: Message = {
          content: "Greet me randomly calling me buddy",
          dateTime: new Date(),
          position: MessagePosition.RIGHT
        }
        requestMessage = [{ role: 'user', content: `${preprompt} ${newMessage.content}` }]
        const chatResponse = await client.chat.complete({
          model: 'magistral-small-latest',
          messages: requestMessage,
        });
        const responseMessage = (chatResponse.choices[0].message.content as { text: string }[])[1].text;
        const leftMessage = {
          content: String(responseMessage),
          dateTime: new Date(),
          position: MessagePosition.LEFT
        }
        const newMessages = [leftMessage]
        setMessages(newMessages)
      } else {
        const rightMessage: Message = {
          content: userText,
          dateTime: new Date(),
          position: MessagePosition.RIGHT
        }
        const newMessages1 = [...messages, rightMessage]
        setMessages(newMessages1)
        setUserText("")
        requestMessage = [{ role: 'user', content: `${preprompt} ${messages.map((message) => { return `\n${message.content}\n` })} ${rightMessage.content}` }]
        const chatResponse = await client.chat.complete({
          model: 'magistral-small-latest',
          messages: requestMessage,
        });
        const responseMessage = (chatResponse.choices[0].message.content as { text: string }[])[1].text;
        const leftMessage: Message = {
          content: String(responseMessage),
          dateTime: new Date(),
          position: MessagePosition.LEFT
        }
        const newMessages2 = [...newMessages1, leftMessage]
        setMessages(newMessages2)
      }
    }
    catch {
      setHasError(true)
    }
    finally {
      setIsLoading(false)
      scrollToBottom()
    }
  }

  useEffect(() => {
    loadNextMessage()
  }, [])

  return <div className="w-full flex flex-col flex-grow items-center justify-center overflow-hidden">
    <div className="flex-grow overflow-auto flex flex-col items-center px-4 md:w-[100%] py-4">
      <div className="md:w-[60%]">
        {messages.map((message) => <MessageBox key={`${message.dateTime}`} message={message} />)}
        {isLoading ? <Loading /> : <></>}
        {hasError ? <Error /> : <></>}
        <div ref={bottomRef}></div>
      </div>
    </div>
    <div className="md:w-[60%] overflow-visible">
      <ChatTextField content={userText} onChange={setUserText} onSubmit={loadNextMessage} />
    </div>
  </div>
}
export default ChatSection