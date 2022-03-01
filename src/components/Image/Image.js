import "./Image.css";

function Image(props) {
   const image = props.image;
   return (
      <div className="Image">
         <img src={image.webformatURL} alt={image.tags} />
         <div className="text_on_image"><span>{image.tags}</span></div>
      </div>
   );
}

export default Image;
