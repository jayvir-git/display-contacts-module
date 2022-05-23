import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayContacts from './components/displayContacts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<DisplayContacts />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
