import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import UserData from './components/UserData';

function App():JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<UserData />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
