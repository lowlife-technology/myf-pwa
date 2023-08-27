import { useEffect, useState } from 'react';
import { getAssetsThunk } from './slices/AutoPaySlices';
import { InputConsumer } from './InputConsumer/NormalDataConsumer/InputConsumer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { CurrentAsset } from './CurrentAsset/CurrentAsset';
import { DividendList } from './DividendList/DividendList';
import { ComplementalInfo } from './ComplementalInfo/ComplementalInfo';
import { Drawer } from '../../components/Drawer/Drawer';
import ProgressBar, { StackedDataType } from '../../components/ProgressBar';
import { Chart } from './Chart/Chart';

export default function AutoPayCalc() {
  const [asset, setAsset] = useState('');
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((store) => store.AutoPayReducer);

  const onAssetChose = () => {
    dispatch(getAssetsThunk(asset));
  };

  return (
    <div className='justify-center flex-col items-center flex h-screen md:overflow-auto'>
      <div className=' justify-between h-full flex flex-col items-center '>
        <CurrentAsset />
        <ComplementalInfo display='flex' />
      </div>

      <div className='w-fit flex flex-col justify-center items-center pb-10 gap-10'>
        <InputConsumer
          placeholder='Ticker'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAsset(e.target.value)}
          onClick={onAssetChose}
          value={asset}
        />
        <Chart />
        <Drawer>
          <DividendList data={data} />
        </Drawer>
      </div>
    </div>
  );
}
