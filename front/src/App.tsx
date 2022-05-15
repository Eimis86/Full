import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/404Page/ErrorPage";
import Table from './components/Table/Table';
import Details from './components/Details/Details';
import Add from './components/Add/Add';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path='/Details' element={ <Details/> } />
          <Route path='/Add' element={ <Add/> }/>
          <Route path='*' element={ <ErrorPage/>} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;
