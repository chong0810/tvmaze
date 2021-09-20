import logo from "./logo.svg";
import "./App.css";
import { MyNavBar } from "./Components/Header";
import { MovieCard } from "./Components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MovieCard />
    </div>
  );
}

export default App;
