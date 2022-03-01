import "./App.css";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";
import SlideShowModal from "./components/SlideShowModal/SlideShowModal";
import { getGallery } from "./api/api";
import { useState, useEffect } from "react";

function App() {
   const [slideShow,setSlideShow] = useState(false);
   const [gallery, setGallery] = useState(null);

   useEffect(() => {
      //
      getGallery().then((data) => {
         console.log("data from sever:", data);
         if (data.message === "Not Found") setGallery(null);
         else setGallery(data);
      });
      //
   }, []); // [] - run after first render (one time)
   return (
      <div className="App">
         <div className="app-content">
            <Header slideShow={slideShow} setSlideShow={setSlideShow}/>
            <Main gallery={gallery}/>
            <Footer/>
            {slideShow && <SlideShowModal gallery={gallery} slideShow={slideShow} setSlideShow={setSlideShow}/>}
         </div>
      </div>
   );
}

export default App;
