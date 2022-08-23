import { Navigate } from 'react-router-dom';
import { LoginForm } from '../../Components/LoginForm';

export const Login = () => {
  const loggedUser = localStorage.getItem('@Giro:email');
  if (loggedUser) {
    return <Navigate to={`/simulation/${loggedUser}`} replace />;
  }

  return <LoginForm />;
};
