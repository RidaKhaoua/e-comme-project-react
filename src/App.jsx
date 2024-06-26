import "./App.css";
import {
  Hero,
  NewArrival,
  TopCollection,
  LatestCollection,
  Statistique,
  LatestNews,
} from "./Components";
import TableOfProducts from "./Components/TableOfProducts/TableOfProducts";

function App() {
  
  return (
      <div className="app">
        <TableOfProducts />
        <div className="container">
          <Hero />
          <TopCollection />
          <NewArrival />
          <LatestCollection />
        </div>
        <Statistique />
        <div className="container">
          <LatestNews/>
        </div>
      </div>

  );
}

export default App;
