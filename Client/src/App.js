import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CreateForm from './component/Create/CreateForm';
import Error from './component/Error';
import Main from './component/Main';
import NavigationBar from './component/NavigationBar';
import ClientDetails from './component/UpdateClient/ClientDetails';
import ViewClient from './component/ViewClient';
// import ProtectedRoute from './component/ProtectedRoute';
import Welcome from './component/Welcome';

function App() {
  return (
    <>
      <NavigationBar />

      <Switch>

        <Route exact path="/" component={Welcome} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/ClientDetails" component={ClientDetails} />
        <Route exact path="/CreateForm" component={CreateForm} />
        <Route exact path="/Clients" component={ViewClient} />

        <Route exact path="*">   <Error /> </Route>

        {/* <ProtectedRoute exact to="/Main" component={Main} /> */}


      </Switch>

    </>
  );
}

export default App;
