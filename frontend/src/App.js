import AppBar from '@material-ui/core/AppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Menu from './components/Menu.js';

const useStyles = makeStyles(() => ({
  navItem: {
    color: '#fff',
    marginLeft: '5em',
    textDecoration: 'none',
  },
}));

function App() {
  const css = useStyles();

  return (
    <div>
      <Router>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h2">
              Menus:
            </Typography>
            <Link to="/api/menus/a" className={css.navItem}>
              <Typography variant="h2">
                A
              </Typography>
            </Link>
            <Link to="/api/menus/b" className={css.navItem}>
              <Typography variant="h2">
                B
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/api/menus/:letter" component={Menu} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
