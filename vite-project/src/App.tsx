import NavBar from "@/scenes/navbar";
import Home from "@/scenes/home";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      console.log("ScrollY Position:", window.scrollY);
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
        console.log("top of page");
      } else if (window.scrollY !== 0) {
        console.log("not top of page");
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <div className="app bg-gray-20">
      <NavBar   
              isTopOfPage={isTopOfPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} 
             />
       <Home selectedPage={selectedPage}/>
   </div>
  )
}

export default App
