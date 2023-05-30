import AddBiodata from "./component/addBiodata/AddBiodata";
import HomePage from "./component/homepage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/addBiodata" Component={AddBiodata} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
