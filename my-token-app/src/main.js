import './App.css'
import { Switch} from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { EnabledRoute } from './components/Routes/EnabledRoute'
import DisplayDashboard from  './components/Dashboard/DisplayDashboard'
import AdminDashboard from  './components/Dashboard/AdminDashboard'
import FoodDashboard from  './components/Dashboard/FoodDashboard'



const useStyles = makeStyles({
  appMain: {
    width: '100%',
    backgroundColor: 'rgb(226, 226, 226)',
    height: '100vh',
    overflow: 'auto',
    flex: 1,
    flexGrow: 1
  }
})

function RouterMain() {
  const classes = useStyles()

  return (
    <div className={`App ${classes.appMain}`}>
      <div className="flex">
        <div className="overflow-auto w-full app-content">
            <main className="main">
              <Switch>
                <EnabledRoute
                  isEnabled={true}
                  path="/"
                  exact
                  component={DisplayDashboard}
                />
                <EnabledRoute
                  isEnabled={true}
                  path="/admin"
                  component={AdminDashboard}
                />
                 <EnabledRoute
                  isEnabled={true}
                  path="/food"
                  component={FoodDashboard}
                />
              </Switch>
            </main>
        </div>
      </div>
    </div>
  )
}

export default RouterMain
