import logo from './logo.svg';
import './App.css';

const host = 'http://localhost:3001/Mysql/Query';
const option = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    // host    : '211.231.136.182',
    // user    : 'root',
    // password: 'DK',
    // database: 'local',
    query   : `SELECT * 
                 FROM zm_menu`
  })
};

function App() {
  const getServerData = () => {
    fetch(host,option)
    .then(res => {
      // console.log(res);
      // console.log(typeof(res));
      return res.json();
    })
    .then(
      res1 => {
        console.log(res1)
      }
    )
    .catch(
      err => {
        console.log(err)
      }
    );
  };

  return (
    <div className="App">
      <button onClick={(e) => getServerData()}>Test</button>
    </div>
  );
}

export default App;
