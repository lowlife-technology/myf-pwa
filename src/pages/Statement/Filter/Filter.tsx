import { Button } from '../../../components/Buttons/Button';
import { CircleBtn } from '../../../components/Buttons/CircleBtn';
import { Input } from '../../../components/Input/Input';
import { Categories } from '../services/categories';

export const Filter = () => {
  return (
    <div className='flex flex-col gap-2 '>
      <Input icon='seacrh' onInputButton={() => {}} inputButton />
      <div className='flex w-full h-full gap-10 flex-col'>
        <div className='flex w-full h-fit items-center justify-between'>
          <div className='flex gap-4'>
            {Categories.map(({ color }) => {
              return <CircleBtn size='small' color={color} />;
            })}
          </div>
          <div>
            <Button size='small' text='Date' />
          </div>
        </div>
      </div>
    </div>
  );
};
