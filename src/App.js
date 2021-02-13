import Header from './components/Header'

function App() {
  const name = "Stephan";
  const x = true;

  return (
    <div className="container">
      <Header />
        {/* <h1>Hello From React</h1> */}
      {/* <h2>Hello {x ? 'Yes': 'No'}</h2> */}
    </div>
  );
}



export default App;

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }