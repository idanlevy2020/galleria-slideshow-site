import "./SlideShowModal.css";
import {useState} from "react";

function SlideShowModal(props) {
   const gallery = props.gallery;
   const [indexImageModal,setIndexImageModal] = useState(0);

   const image=gallery.hits[indexImageModal];

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function (event) {
      if (event.target.className ==="modal") {
         props.setSlideShow(false); //close the modal
      }
   };

   function onClick_prev(){
      if ((indexImageModal>0)&&(indexImageModal<=19)){
         const newIndex=indexImageModal-1;
         setIndexImageModal(newIndex);
      } 
      else if (indexImageModal===0) setIndexImageModal(19);
   }

   function onClick_next(){
      if ((indexImageModal>=0)&&(indexImageModal<19)){
         const newIndex=indexImageModal+1;
         setIndexImageModal(newIndex);
      } 
      else if (indexImageModal===19) setIndexImageModal(0);
   }

   return (
      <div className="SlideShowModal">
         <div id="myModal" className="modal">
            <button className="closeBtn" type="button" onClick={()=>props.setSlideShow(false)}>&times;</button>
               <div className="modal-content">
                  <div className="mySlides">
                     <div className="numbertext">{indexImageModal+1} / {gallery.hits.length}</div>
                     <img src={image.webformatURL} alt={image.tags} />
                  </div> 
                  <button className="prevBtn" type="button" onClick={()=>onClick_prev()}>&#10094;</button>
                  <button className="nextBtn" type="button" onClick={()=>onClick_next()}>&#10095;</button>
                  {/* <div className="caption-container">
                     <p id="caption"></p>
                  </div> */}
               </div>           
         </div>        
      </div>
   );
}

export default SlideShowModal;
