import styles from './app.module.scss';
import SignIn from './components/SignIn';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';

import { GuardProvider, GuardedRoute } from 'react-router-guards';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
