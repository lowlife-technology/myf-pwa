import { useAppSelector } from '../hooks/useAppSelector';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export default function Route() {
  const { isAuth } = useAppSelector((store) => store.EntraceReducer);

  return !isAuth ? <PublicRoutes /> : <PrivateRoutes />;
}
