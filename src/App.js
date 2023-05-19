import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { DarkModeContext } from "./context/DarkModeContext";
import "./App.css"
 

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

  useEffect(() => {
    fetchBlogPosts();
  },[]);

  return(
        <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
           <Header/>
            <Blogs />
            <Pagination />
          </div>
    
         
    
     
  );

}
