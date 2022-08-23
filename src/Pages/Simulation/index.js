import { Navigate } from 'react-router-dom';
import { SimulationCard } from '../../Components/SimulationCard';

export const Simulation = () => {
  const loggedUser = localStorage.getItem('@Giro:email');
  if (!loggedUser) {
    return <Navigate to="/" replace />;
  }
  return <SimulationCard />;
};
