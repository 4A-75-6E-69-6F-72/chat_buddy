import ChatSection from "@/sections/ChatSection";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";

export default function Home() {
  return (
    <div className="font-sans h-[100vh] w-full flex flex-col simple-grain-effect">
        <Header/>
        <ChatSection/>
        <Footer/>
    </div>
  );
}
