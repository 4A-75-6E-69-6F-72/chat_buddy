import { ChangeEventHandler } from "react";

const ChatTextField = ({ content, onChange, onSubmit }: { content: string, onChange: Function, onSubmit: Function }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }
  return <input
    value={content}
    onChange={handleChange}
    onKeyDown={async (event) => {
      if (event.key === "Enter") {
        await onSubmit();
      }
    }}
    placeholder="Write your message"
    className="w-full h-16 px-4 rounded-lg shadow-md shadow-[#FF0000]/5 border-1 border-[#000000]/40 outline-none"
    type="text" />
}
export default ChatTextField