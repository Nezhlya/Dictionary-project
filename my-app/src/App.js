import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="container font-link text-center ">
        <div className=" paper ">
          <div className="lines">
            <div className="text">
              <h1>
                <b>Dictionary</b>
              </h1>
              <br />
              Which word are you interested in searching?
                <form className="form">
                  <input type="search" placeholder="Enter a word"></input>
                  <input type="submit" value="Search"></input>
                </form>
            </div>
          </div>
          <div className="holes hole-top"></div>
          <div className="holes hole-middle"></div>
          <div className="holes hole-bottom"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
