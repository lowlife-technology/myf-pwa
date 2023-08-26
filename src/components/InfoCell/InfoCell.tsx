interface InfoCellProps {
  textOne?: string;
  textTwo?: string;
  amount?: number | string;
}

export const InfoCell = ({ textOne, textTwo, amount }: InfoCellProps) => {
  return (
    <div className=' flex border-slate-600 items-center'>
      <p className='text-xs'>
        {textOne} {amount} {textTwo}
      </p>
    </div>
  );
};
