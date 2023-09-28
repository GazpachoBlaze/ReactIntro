import logo from './logo.svg';
import './App.css';

function Item(props) {
  return <div className="item">
  <b>Name: </b> {props.name }
  <b> Price: </b> ${props.price } <br />
  </div>;
}

function App() {
  return <div>
    <Item name="Cheese" price="4" />
    <Item name="Eggs" price="3" />
    <Item name="Rice" price="18" />
  </div>;
}



export default App;
