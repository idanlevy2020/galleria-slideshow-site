import "./Header.css";

function Header(props) {
   return (
      <div className="Header flex-row">
         <h1 className="title"> galleria. </h1>
         <button type="button" onClick={()=>props.setSlideShow(!props.slideShow)}>START SLIDESHOW</button>
      </div>
   );
}

export default Header;
