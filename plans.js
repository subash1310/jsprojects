import Image from "../image/burj.jfif";
import One from "../image0/nature.jpg";
import Two from "../image1/2bhk.png";
import Three from "../image2/3bhk.png";
import Four from "../image3/4bhk.jfif";
import Five from "../image4/5bhk.png";
import "../App.css"
function Plans(){
    return(
        <div>
            <p> housing plans</p>
            <img src={One} className="image0"></img>
            <h1>2bhk</h1>
            <img src={Two} className="image1"></img>
            <h2>3BHK</h2>
            <img src={Three} className="image2"></img>
            <h3>4bhk</h3>
            <img src={Four} className="image3"></img>
            <h5>5BHK</h5>
            <img src={Five} className="image4"></img>
        </div>
    )
}
export default Plans;