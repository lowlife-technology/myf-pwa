import { InfoCell } from '../../../components/InfoCell/InfoCell';
import { useAppSelector } from '../../../hooks/useAppSelector';

interface ComplementalInfo {
  display: string;
}

export const ComplementalInfo = ({ display }: ComplementalInfo) => {
  const { quotesTotal } = useAppSelector((store) => store.AutoPayReducer.staticReducer);
  return (
    <div className={`items-center ${display} justify-center`}>
      {quotesTotal !== 0 && (
        <div>
          <InfoCell textOne='There is' amount={quotesTotal} textTwo='of quotes' />
        </div>
      )}
    </div>
  );
};
