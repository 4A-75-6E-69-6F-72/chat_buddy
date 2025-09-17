import ChatSection from "@/sections/ChatSection";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
/**
 * ChatPage Component - Main landing page for the application
 * 
 * @component
 * @example
 * return <Home />
 * 
 * @description
 * This page serves as the main entry point for users. It includes:
 * - A header
 * - A Messages section
 * - A footer
 * 
 * @returns {JSX.Element} The rendered homepage component
 */


export default function Home() {
  return (
    <div className="font-sans h-[100vh] w-full flex flex-col simple-grain-effect">
        <Header/>
        <ChatSection/>
        <Footer/>
    </div>
  );
}
