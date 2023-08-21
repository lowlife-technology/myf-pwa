import { InfoCell } from '../../../components/InfoCell/InfoCell';

interface CurrentAssetProps {
  data: {
    logourl: string;
    shortName: string;
    regularMarketPrice: number;
  };
}

export const CurrentAsset = ({ data }: CurrentAssetProps) => {
  return (
    <div className='md:flex-1  flex md:justify-start justify-center md:items-start  pt-10 '>
      <div className=' w-fit'>
        {data.logourl ? (
          <div>
            <div className='flex flex-col items-center gap-1 border-b border-slate-400'>
              <img src={data.logourl} alt='logo' />
              <p className='text-xs'>{data.shortName}</p>
            </div>
            <InfoCell title='Cotação' content={`R$ ${data.regularMarketPrice}`} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
