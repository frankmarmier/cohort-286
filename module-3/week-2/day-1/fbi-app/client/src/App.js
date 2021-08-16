import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import WantedPage from "./Pages/WantedPage";
import NavMain from "./Components/NavMain";
import DashboardPage from "./Pages/DashboardPage";
import CreateFugitivePage from "./Pages/CreateFugitivePage";
import EditFugitivePage from "./Pages/EditFugitivePage";
import FugitiveFormPage from "./Pages/FugitiveFormPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/wanted" component={WantedPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        {/* <Route exact path="/dashboard/create" component={FugitiveFormPage} />
        <Route exact path="/dashboard/:id/edit" component={FugitiveFormPage} /> */}

        <Route exact path="/dashboard/create">
          <FugitiveFormPage action="create" />
        </Route>

        <Route
          exact
          path="/dashboard/:id/edit"
          render={(props) => {
            return <FugitiveFormPage {...props} action="update" />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
