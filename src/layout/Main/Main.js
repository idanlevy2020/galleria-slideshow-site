import "./Main.css";
import { getGallery } from "../../api/api";
import { useState, useEffect } from "react";
import Image from "../../components/Image/Image";

function Main() {
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
      <div className="Main">
         {gallery !== null &&
            gallery.hits.map((image) => (
               <Image image={image} key={image.id}/>
            ))}
      </div>
   );
}

export default Main;
