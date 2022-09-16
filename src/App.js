import './App.css';
import ProductList from './Component/ProductList';
import Pure from './Component/Pure';

function App() {
  return (
    <div className="App">
      <h1>Q-01 :- Higher order component</h1>
      <p style={{backgroundColor:"white",color:"black"}}>Higher order component is a function which takes a wrapped Component as  an input argument and return a new enhanced component. A higher-order component is a function that takes a component and returns a new component.</p>
      <pre>
        syntax:const enhancedComponent = higherOrderComponent(originalComponent);
      </pre>
      <h3>Implemetation : Search Option</h3>
      <ProductList /><br></br><br></br>
      <h1>Q-02 :- React Pure Component</h1>
      <p style={{backgroundColor:"white", color:"black"}}>
        React.PureComponent is similar to React.Component. The difference between them is that React.Component does not implement shouldComponentUpdate().<br></br>
        A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.PureComponent class are treated as pure components.
      </p>
      <h3>Implemetation : State Update</h3>
      <Pure />
    </div>
  );
}

export default App;
