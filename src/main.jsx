
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import FeedbackForm from './Contact/Feedbackform.jsx';

createRoot(document.getElementById('root')).render(
 
  
  <BrowserRouter>
    {/* <App/> */}
<FeedbackForm/>

</BrowserRouter>
)
