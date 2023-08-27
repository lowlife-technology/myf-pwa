import { useEffect, useState } from 'react';
import ProgressBar, { StackedDataType } from '../../../components/ProgressBar';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { decimalToBRLCurrency } from '../../../functions/DecimalToBrlCurrency';

export const Chart = () => {
  const [color, setColor] = useState('rgba(12,12,12,0.5)');
  const [shiftState, setShiftState] = useState(false);

  const { staticReducer, data } = useAppSelector((store) => store.AutoPayReducer);

  const regular = data.regularMarketPrice;

  const earns = staticReducer.boughtPerMonth.reduce((total, earnPerPurchase) => {
    return total + earnPerPurchase.receivedAmount;
  }, 0);

  const quantity = staticReducer.boughtPerMonth.reduce((total, quoteQuantity) => {
    return total + quoteQuantity.quantity;
  }, 0);

  const vallumn = quantity * regular + earns;

  const inCash = Math.floor(vallumn / 100);

  useEffect(() => {
    const interval = setInterval(() => {
      const newColor = getRandomColor();
      setColor(newColor);
      setShiftState((prevShiftState) => !prevShiftState);
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function getRandomColor() {
    const r = 12;
    const g = 12;
    const b = Math.floor(Math.random() * 256);
    const alpha = 0.2; // Fixed alpha value
    return `rgba(${r},${g},${b},${alpha})`;
  }

  const number = [inCash];
  const stacks = number.map((num) => ({
    y: num,
    color: color
  }));

  const plotLines: Highcharts.YAxisPlotLinesOptions[] = [
    {
      value: inCash,
      dashStyle: 'Solid',
      color: '#1B49E0',
      label: {
        text: `${shiftState ? `R$ ${decimalToBRLCurrency(earns)}` : `${inCash}%`}`,
        align: 'left',
        x: 10,
        y: -4
      },
      width: 2,
      zIndex: 5
    }
  ];

  return (
    <ProgressBar
      xLegend={['Agora']}
      chartWidth={220}
      barWidth={220}
      hight='h-[600px]'
      plotLines={plotLines}
      type='column'
      stackedData={[{ data: stacks }] as StackedDataType}
    />
  );
};
