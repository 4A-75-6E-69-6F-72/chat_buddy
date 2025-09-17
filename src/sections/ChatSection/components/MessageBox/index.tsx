import { Message, MessagePosition } from "@/types/types"

const MessageBox = ({ message }: { message: Message }) => {
  return message.position == MessagePosition.LEFT ? <div className="w-full">
    <div className="max-w-[60%] flex shodow-lg my-4">
      <div className="px-4 py-2 bg-[#FF0000]/5 shadow-md shadow-[#FF0000]/5 border-1 border-[#FF0000]/5 text-gray-600 rounded-md min-w-0">
        {message.content}
      </div>
    </div>
  </div> : 
  <div className="w-full flex justify-end my-4">
    <div className="max-w-[60%]">
      <div className="px-4 py-2 bg-[#0000FF]/2 shadow-md shadow-[#0000FF]/5 border-1 border-[#0000FF]/8 text-gray-600 rounded-md min-w-0">
        {message.content}
      </div>
    </div>
  </div>
}
export default MessageBox