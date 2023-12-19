import image from "../image/burj.jfif";
import "../App.css"
function Interior(){
    return(
        <div>
            <p>wood design</p>
            <img src={image} className="image"></img>
            <a href="Plans">plans partition</a>
        </div>
    )
}
export default Interior;
