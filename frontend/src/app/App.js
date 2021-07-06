import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import EditTodo from "../components/EditTodo";
import Todos from "../components/Todos";
import Navbar from "../layouts/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Todos} />
          <Route exact path="/add" component={AddTodo} />
          <Route exact path="/edit/:id" component={EditTodo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
