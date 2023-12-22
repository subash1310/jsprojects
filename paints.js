import Dot from "../paints/paint0.jpg";
import "../App.css"
function Paint(){
    return(
        <div>
            <p>paint designs</p>
            <img src={Dot} className="paint0"/>
            <a href="Plans">plans partition</a>
            <button type="button" class="btn btn-success">appear</button>
            <form>
        {/* <label> tag defines a label for many form elements */}
        <label for="fname">Consle login:</label>
        <br />
        <input type="password"></input>
        </form>
        <table class="table  table-hover table-borderless">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-success"> 
        <td>Ari</td>
        <td>25</td>
        <td>ari@example.com</td>
      </tr>
      <tr>
        <td>Ajith</td>
        <td>30</td>
        <td>ajith@example.com</td>
      </tr>
   
    </tbody>
  </table>
        </div>
    )
}
export default Paint;
