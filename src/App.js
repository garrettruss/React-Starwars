import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import { getStarShips } from './services/sw-api';

import ShipIndexPage from './pages/ShipIndexPage/ShipIndexPage';
import ShipShowPage from './pages/ShipShowPage/ShipShowPage';

function App() {

  // we also need to initialize component state with useState
  const [appData, setAppData] = useState({
    starships: []
  })

  async function getAppData() {
    // get starship data
    const data = await getStarShips();
    console.log(data);
    // set component state
    const appDataCopy = {...appData};
    data.results.map(starship => appDataCopy.starships.push(starship));
    setAppData(appDataCopy);
  }

  useEffect(() => {
    getAppData();
  }, []); // <--- don't forget empty dependency array!

  return (

    <div className="App">
      <header className="App-header">
        <h1>Starships of Star Wars</h1>
      </header>

      <Switch>
        <Route exact path='/' render={(props) => 
          <ShipIndexPage 
            starships={appData.starships}
          />
        } />

        <Route path='/:id' render={(props) => 
          <ShipShowPage
            {...props}
            starships={appData.starships}
          />
        }/>
      </Switch>
    </div>
  );
}

export default App;