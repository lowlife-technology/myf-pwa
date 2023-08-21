interface InfoCellProps {
  title: string;
  content: string | number;
}

export const InfoCell = ({ title, content }: InfoCellProps) => {
  return (
    <div className=' flex border-slate-600 gap-2 flex-col items-center'>
      <div className=' border-b border-slate-400 p-2 '>
        <p className='text-xs'>{title}</p>
      </div>
      <p>{content}</p>
    </div>
  );
};
