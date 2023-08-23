import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export default function Route() {
  const loged = false;
  return !loged ? <PublicRoutes /> : <PrivateRoutes />;
}
