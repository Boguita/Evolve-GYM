import NavBar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "./scenes/ourclasses";
import ContactUs from "./scenes/contact us";
import Footer from "./scenes/footer";


function App() {
 const [selectedPage, setSelectedPage] = useState<SelectedPage>(
  SelectedPage.Home
  );
  const [onScroll, setOnScroll] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setOnScroll(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setOnScroll(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <NavBar 
        onScroll={onScroll}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
