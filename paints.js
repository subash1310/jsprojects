import Dot from "../paints/paint0.jpg";
import "../App.css"
function Paint(){
    return(
        <div>
            <p>paint designs</p>
            <img src={Dot} className="paint0"></img>
            <a href="Plans">plans partition</a>
            <button type="button" class="btn btn-success">appear</button>
            <form>
        {/* <label> tag defines a label for many form elements */}
        <label for="fname">Consle login:</label>
        <br />
        </form>
        </div>
    )
}
export default Paint;
