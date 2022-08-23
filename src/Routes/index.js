import { Route, Routes } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { Simulation } from '../Pages/Simulation';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/simulation">
        <Route path=":user_email" element={<Simulation />} />
      </Route>
    </Routes>
  );
};
