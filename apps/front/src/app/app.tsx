import SignIn from './components/SignIn';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';

import ProtectedRoute from './components/ProtectedRoute';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
