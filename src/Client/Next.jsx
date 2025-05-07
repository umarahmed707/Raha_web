import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clientinfo from './Clientinfo';
import Clientinfo2 from './Clientinfo2';
import Clientinfo3 from './Clientinfo3';

function Next() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Clientinfo />} />
        <Route path="/Clientinfo2" element={<Clientinfo2 />} />
        <Route path="/Clientinfo3" element={<Clientinfo3 />} /> 
      </Routes>
    </Router>
  );
}

export default Next;
