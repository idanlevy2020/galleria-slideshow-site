import "./Main.css";
import Image from "../../components/Image/Image";

function Main(props) {
   const gallery=props.gallery;
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
