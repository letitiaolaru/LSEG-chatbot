import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatBotPage from './pages/ChatBotPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


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
