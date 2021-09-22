import "./App.css";
import { Header } from "./Components/Header";
// import { MovieCard } from "./Components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Search from "./Pages/PeopleSearch";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter forceRefresh>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/show" component={Show} />
        <Route path="/search" component={Search} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
