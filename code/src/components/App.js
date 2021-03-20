import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamList from "./streams/streamList";
import StreamCreate from "./streams/streamCreate";
import StreamEdit from "./streams/streamEdit";
import StreamDelete from "./streams/streamDelete";
import StreamShow from "./streams/streamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/stream/new" exact component={StreamCreate} />
            <Route path="/stream/edit/:id" exact component={StreamEdit} />
            <Route path="/stream/delete/:id" exact component={StreamDelete} />
            <Route path="/stream/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
