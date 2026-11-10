import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SakuraMaintenance from './components/SakuraMaintenance.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SakuraMaintenance />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
