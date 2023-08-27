import { InfoCell } from '../../../components/InfoCell/InfoCell';
import { useAppSelector } from '../../../hooks/useAppSelector';

interface ComplementalInfo {
  display: string;
}

export const ComplementalInfo = ({ display }: ComplementalInfo) => {
  const { boughtPerMonth } = useAppSelector((store) => store.AutoPayReducer.staticReducer);
  const quantity = boughtPerMonth.reduce((total, quoteQuantity) => {
    return total + quoteQuantity.quantity;
  }, 0);

  return (
    <div className={`items-center ${display} justify-center`}>
      {quantity !== 0 && (
        <div>
          <InfoCell textOne='There is' amount={quantity} textTwo='of quotes' />
        </div>
      )}
    </div>
  );
};
