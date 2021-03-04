import logo from './logo.svg';
import './App.css';

const host = 'http://localhost:3001';
const option = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    query: 'adsfdsf'
  })
};

function App() {
  const getServerData = () => {
    fetch(host,option)
    .then(res => {
      console.log(res);
      console.log(typeof(res));
      return res.json();
    })
    .then(
      res => console.log(res)
    )
    .catch(
      err => console.log(err)
    );
  };

  return (
    <div className="App">
      <button onClick={(e) => getServerData()}>Test</button>
    </div>
  );
}

export default App;
