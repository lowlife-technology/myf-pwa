import { useEffect, useState } from 'react';
import ProgressBar, { StackedDataType } from '../../../components/ProgressBar';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { decimalToBRLCurrency } from '../../../functions/DecimalToBrlCurrency';
import { YAxisPlotLinesOptions } from 'highcharts';

export const Chart = () => {
  const [color, setColor] = useState('rgba(12,12,12,0.5)');
  const [shiftState, setShiftState] = useState(false);
  const { staticReducer, data } = useAppSelector((store) => store.AutoPayReducer);
  const [trisal, setTrisal] = useState(0);

  const earns = staticReducer.boughtPerMonth.reduce((total, earnPerPurchase) => {
    return total + earnPerPurchase.receivedAmount;
  }, 0);

  const earnsPerCent = Math.floor(earns / 100);

  const quantity = staticReducer.boughtPerMonth.reduce((total, quoteQuantity) => {
    return total + quoteQuantity.quantity;
  }, 0);
  const purchaseVolume = staticReducer.boughtPerMonth.reduce((total, marketPrice) => {
    return total + marketPrice.purchaseVolume;
  }, 0);

  const muchValuated = data.regularMarketPrice * quantity;

  const valorization = muchValuated - purchaseVolume;
  const valorizationPerCents = Math.floor(valorization / 100);

  const balance = earns + valorization;
  const balancePerCents = Math.floor(balance / 100);

  useEffect(() => {
    const interval1 = setInterval(() => {
      const newColor = getRandomColor();
      setColor(newColor);
      setShiftState((prevShiftState) => !prevShiftState);
    }, 4000);
    const interval2 = setInterval(() => {
      if (trisal === 0) {
        setTrisal(1);
        console.log('zero');
      } else if (trisal === 1) {
        setTrisal(2);
        console.log('um');
      } else if (trisal === 2) {
        setTrisal(0);
        console.log('dois');
      }
    }, 8000);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [trisal]);

  function getRandomColor() {
    const r = 12;
    const g = 12;
    const b = Math.floor(Math.random() * 256);
    const alpha = 0.2; // Fixed alpha value
    return `rgba(${r},${g},${b},${alpha})`;
  }

  const numberObj = () => {
    if (trisal === 0) {
      return balancePerCents;
    } else if (trisal === 1) {
      return valorizationPerCents;
    } else if (trisal === 2) {
      return earnsPerCent;
    }
  };

  const number = [numberObj()];
  const stacks = number.map((num) => ({
    y: num,
    color: color
  }));

  const plotLinesObj = () => {
    if (trisal === 0) {
      return {
        value: balancePerCents,
        dashStyle: 'Solid',
        color: 'green',
        label: {
          text: `${
            shiftState
              ? `R$ ${decimalToBRLCurrency(balance)} balance you have`
              : `${balancePerCents}% balance you have`
          }`,
          align: 'left',
          x: 10,
          y: -4
        },
        width: 2,
        zIndex: 5
      };
    } else if (trisal === 1) {
      return {
        value: valorizationPerCents,
        dashStyle: 'Solid',
        color: 'red',
        label: {
          text: `${
            shiftState
              ? `R$ ${decimalToBRLCurrency(valorization)} valorizated`
              : `${valorizationPerCents}% valorizated`
          }`,
          align: 'left',
          x: 10,
          y: -4
        },
        width: 2,
        zIndex: 5
      };
    } else if (trisal === 2) {
      return {
        value: earnsPerCent,
        dashStyle: 'Solid',
        color: 'blue',
        label: {
          text: `${
            shiftState
              ? `R$ ${decimalToBRLCurrency(earns)} provents you earn`
              : `${earnsPerCent}% provents you earn`
          }`,
          align: 'left',
          x: 10,
          y: -4
        },
        width: 2,
        zIndex: 5
      };
    }
  };

  const plotLines: Highcharts.YAxisPlotLinesOptions[] = [plotLinesObj() as YAxisPlotLinesOptions];

  return (
    <ProgressBar
      xLegend={['Agora']}
      chartWidth={220}
      barWidth={220}
      hight='h-[650px]'
      plotLines={plotLines}
      type='column'
      stackedData={[{ data: stacks }] as StackedDataType}
    />
  );
};
