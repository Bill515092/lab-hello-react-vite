import "./App.css";
import "./styles.css";
import NavBar from "./components/nav";
import Headline from "./components/headline";
import Gallery from "./components/gallery";
//import Menu from "./components/menu";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Headline />

      <Gallery />
    </div>
  );
}
export default App;
