import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import Analytics from './pages/Analytics';
import Entities from './pages/Entities';
import Overview from './pages/Overview';
import Reports from './pages/Reports';
import Sales from './pages/Sales';
import Settings from './pages/Settings';
import SignIn from './pages/SignIn';
import Team from './pages/Team';

const App = () => (
  <Routes>
    <Route path="/signin" element={<SignIn />} />
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<Overview />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="sales" element={<Sales />} />
      <Route path="entities" element={<Entities />} />
      <Route path="reports" element={<Reports />} />
      <Route path="team" element={<Team />} />
      <Route path="settings" element={<Settings />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
