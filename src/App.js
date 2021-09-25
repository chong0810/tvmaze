import "./App.css";
import { Header } from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Show from "./Pages/Show";
import PeopleSearch from "./Pages/PeopleSearch";
import ShowSearch from "./Pages/ShowSearch";

function App() {
  return (
    <BrowserRouter forceRefresh>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/show" component={Show} />
        <Route path="/search/shows" component={ShowSearch} />
        <Route path="/search/people" component={PeopleSearch} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
