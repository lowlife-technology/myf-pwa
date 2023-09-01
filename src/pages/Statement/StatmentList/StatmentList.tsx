import { StatmentItem } from '../StatmentItem/StatmentItem';
import { Moviments } from '../services/categories';

interface StatementListProps {
  onClick: (moment: string, category: string, loss: boolean, change: number) => void;
}

export const StatementList = ({ onClick }: StatementListProps) => {
  const sortedMoviments = Moviments.sort((a, b) => {
    const momentA = a.moment.slice(4);
    const momentB = b.moment.slice(4);
    return Number(momentA) - Number(momentB);
  });

  return (
    <div className='overflow-auto w-full xl:w-1/5 xl:h-[75vh]'>
      {sortedMoviments.map(
        ({ category, category_id, change, description, moment, gain, loss }, index: number) => {
          // Define two background colors to alternate
          const backgroundColors = ['bg-grey-1', 'bg-grey-1'];

          // Apply a background color based on whether the index is even or odd
          const bgColor = backgroundColors[index % 2];

          return (
            <div key={index} className={`${bgColor}`}>
              <StatmentItem
                onClick={onClick}
                gain={gain}
                loss={loss}
                category={category}
                change={change}
                description={description}
                moment={moment}
                category_id={category_id}
              />
            </div>
          );
        }
      )}
    </div>
  );
};
