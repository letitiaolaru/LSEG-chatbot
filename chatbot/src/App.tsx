import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatBotPage from './pages/ChatBotPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


/*
  This is the main App component. It  uses the react-router-dom library
  for routing and redirects to the chatbot page by default
*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/chatbot" />} />
        <Route path="/chatbot" element={<ChatBotPage />} />
        <Route path="*" element={<Navigate to="/chatbot" />} />
      </Routes>
    </Router>
  );
}

export default App;
