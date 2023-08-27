import React from 'react';
import Highcharts, { SeriesOptionsType, TooltipPositionerCallbackFunction } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsAnnotations from 'highcharts/modules/annotations';

HighchartsAnnotations(Highcharts);

export interface StackedDataProps {
  data: number[];
  color: string;
}

export type StackedDataType = { data: number[]; color: string }[] & SeriesOptionsType[];

interface ProgressBarProps {
  stackedData: StackedDataType;
  type: 'bar' | 'column';
  hight?: string;
  xVisible?: boolean;
  barWidth?: number;
  showLegend?: boolean | undefined;
  dataLabels?: boolean;
  positioner?: TooltipPositionerCallbackFunction;
  chartWidth?: number;
  xLegend?: string[];
  containerHeigh?: string;
  plotLines?: Highcharts.YAxisPlotLinesOptions[];
  viewAnnotantion?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  stackedData,
  type = 'bar',
  xLegend,
  dataLabels = false,
  plotLines,
  xVisible = false,
  showLegend = false,
  chartWidth = 0,
  positioner,
  containerHeigh = '100%',
  barWidth = 10,
  hight = 'h-[40px]'
}) => {
  const options: Highcharts.Options = {
    chart: {
      type: type,
      spacing: [0, 0, 0, 0],
      backgroundColor: 'rgba(12,12,12,0.1)',
      borderWidth: 0,
      height: 0,
      plotBorderWidth: 0,
      width: chartWidth
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: xLegend,
      visible: xVisible,
      labels: {
        style: {
          color: 'transparent',
          fontFamily: 'inter'
        }
      }
    },
    yAxis: {
      min: 0,
      max: 100,
      allowDecimals: true,
      alternateGridColor: 'transparent',
      gridLineColor: 'transparent',
      gridLineWidth: 0,
      visible: true,
      plotLines,
      labels: {
        enabled: false
      },
      title: {
        text: ''
      }
    },
    accessibility: {
      enabled: false
    },
    plotOptions: {
      bar: {
        stacking: 'normal',
        borderColor: 'transparent',
        dataLabels: {
          enabled: dataLabels,
          format: '{y}%'
        }
      },

      series: {
        //Here I had to disable the types cause this props existe but it is not typed
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        pointWidth: barWidth,
        groupPadding: 1
      },
      line: {
        visible: true
      }
    },
    legend: {
      enabled: showLegend,
      labelFormat: 'name',
      itemStyle: {
        color: '#8A9197',
        cursor: 'pointer',
        fontSize: '0.75em',
        fontWeight: 'bold',
        textOverflow: 'ellipsis'
      },
      symbolRadius: 0,
      symbolHeight: 0,
      symbolWidth: 0,
      itemDistance: 47,
      borderWidth: 0,
      itemWidth: 0,
      padding: 0,
      margin: 10,
      align: 'center',
      alignColumns: true,
      width: '100%',
      x: 25
    },
    tooltip: {
      enabled: true,
      shape: 'callout',
      positioner,
      distance: 19,
      padding: 0
    },
    credits: {
      enabled: false
    },

    series: stackedData.map(({ data, color }: StackedDataProps, index: number) => ({
      type,
      name: `Bar ${index + 1}`,
      data,
      color
    }))
  };

  return (
    <div className={`${hight} absolute bottom-[160px] items-end flex`}>
      <HighchartsReact
        containerProps={{ style: { height: containerHeigh } }}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default ProgressBar;
