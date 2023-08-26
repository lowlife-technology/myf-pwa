import { useState } from 'react';
import { getAssetsThunk } from './slices/AutoPaySlices';
import { InputConsumer } from './InputConsumer/NormalDataConsumer/InputConsumer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { CurrentAsset } from './CurrentAsset/CurrentAsset';
import { DividendList } from './DividendList/DividendList';
import { useForm } from 'react-hook-form';
import { ComplementalInfo } from './ComplementalInfo/ComplementalInfo';

export default function AutoPayCalc() {
  const [flipInput, setFlipInput] = useState(false);
  const [asset, setAsset] = useState('');
  const [quantity, setQuantity] = useState('');
  const dispatch = useAppDispatch();
  const { data, staticReducer } = useAppSelector((store) => store.AutoPayReducer);

  const form = useForm();

  const onAssetChose = () => {
    dispatch(getAssetsThunk(asset));
  };

  return (
    <div className='md:flex-row justify-center flex flex-col items-center gap-10 flex-1 md:h-screen md:overflow-auto'>
      <div className='items-center hidden md:flex justify-center md:h-full md:flex-1'>
        <ComplementalInfo display='hidden md:flex' />
      </div>
      <div className='h-screen md:h-full justify-between md:flex-1 flex flex-col items-center '>
        <CurrentAsset />

        <ComplementalInfo display='flex' />
        <div className='flex items-end justify-center pb-28'>
          <div className='w-fit'>
            <InputConsumer
              placeholder='Ticker'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAsset(e.target.value)}
              onClick={onAssetChose}
              value={asset}
            />
          </div>
        </div>
      </div>
      <DividendList data={data} />
    </div>
  );
}
