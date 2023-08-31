import { HighchartsReact } from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { decimalToBRLCurrency } from '../../../../functions/DecimalToBrlCurrency';

export const Charts = () => {
  const { boughtPerMonth } = useAppSelector((store) => store.AutoPayReducer.staticReducer);
  const { regularMarketPrice } = useAppSelector((store) => store.AutoPayReducer.data);

  const findmuchOnMarket = boughtPerMonth.reduce((total, muchOnMarket) => {
    return total + muchOnMarket.purchaseVolume;
  }, 0);

  const findMuchProventsEarn = boughtPerMonth.reduce((total, monthlyProventsEarn) => {
    return total + monthlyProventsEarn.receivedAmount;
  }, 0);

  const findStockQuantity = boughtPerMonth.reduce((total, stockQuantityPerMonth) => {
    return total + stockQuantityPerMonth.quantity;
  }, 0);

  const options = {
    Charts: {
      type: 'column',
      backgroundColor: '',
      width: 1000
    },
    title: {
      text: ''
    },
    xAxis: [
      {
        categories: ['Provents', 'Valuation', 'In Market'],
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        labels: {
          enabled: true
        }
      }
    ],
    yAxis: [
      {
        enabled: false,
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        lineWidth: 0,
        title: {
          enabled: false
        },
        labels: {
          enabled: false,
          categories: ['Provents', 'Valuation', 'In Market']
        }
      }
    ],
    series: [
      {
        type: 'column',
        data: [
          {
            y: findMuchProventsEarn,
            description: 'asdfasdfasdf',
            dataLabels: {
              enabled: true,
              formatter: function (): string {
                return 'R$' + decimalToBRLCurrency(this.y);
              },
              y: 0
            }
          },
          {
            y: findmuchOnMarket,
            dataLabels: {
              enabled: true,
              formatter: function (): string {
                return 'R$' + decimalToBRLCurrency(this.y);
              },
              y: 0
            }
          },
          {
            y: findStockQuantity * regularMarketPrice,
            dataLabels: {
              enabled: true,
              formatter: function (): string {
                return 'R$' + decimalToBRLCurrency(this.y);
              },
              y: 0
            }
          }
        ],
        showInLegend: false
      }
    ],
    credits: {
      enabled: false
    }
  };
  return (
    <HighchartsReact
      containerProps={{ style: { width: '100%' } }}
      highcharts={Highcharts}
      options={options}
    />
  );
};
