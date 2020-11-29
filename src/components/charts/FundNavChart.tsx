import React, { Component } from 'react';
// @ts-ignore
import { ChartCanvas, Chart } from "react-stockcharts";
// @ts-ignore
import { fitWidth } from "react-stockcharts/lib/helper";
// @ts-ignore
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
// @ts-ignore
import { AreaSeries } from "react-stockcharts/lib/series";
// @ts-ignore
import { MouseCoordinateX, MouseCoordinateY, CrossHairCursor } from "react-stockcharts/lib/coordinates";
import { scaleTime } from "d3-scale"
import { timeFormat } from "d3-time-format";
import { format } from "d3-format";


class FundNavChart extends Component<any> {
    private data: Array<any> = [];

    constructor(props: any) {
        super(props);
        const lastYearDate = new Date();
        lastYearDate.setFullYear(lastYearDate.getFullYear() - 1);

        for (let i = 0; i < 365; i++) {
            const tickerDate = new Date(lastYearDate);
            tickerDate.setDate(tickerDate.getDate() + i);
            const random = Math.random() * 5;
            this.data.push({
                date: tickerDate,
                nav: 100 + i + random
            });
        }
    }

    render() {
        const { ratio, width } = this.props;
        const now = new Date();
        const lastYear = new Date();
        lastYear.setFullYear(lastYear.getFullYear() - 1);
        const stroke = getComputedStyle(document.documentElement)
            .getPropertyValue('--primary-theme');

        return (
            <ChartCanvas ratio={ratio} width={width} height={200}
                         seriesName="Funds"
                         data={this.data}
                         type='hybrid'
                         xAccessor={(d: any) => d.date}
                         xScale={scaleTime()}
                         xExtents={[lastYear, now]}
                         margin={{ left: 10, right: 50, top: 10, bottom: 30 }}>

                 <Chart id={0} yExtents={(d: any) => d.nav}>
                    <XAxis axisAt="bottom" orient="bottom" ticks={5}/>
                    <YAxis axisAt="right" orient="right" ticks={4} />
                    <AreaSeries
                        yAccessor={(d: any) => d.nav}
                        fill="#a680ff"
                        stroke={stroke}
                        strokeWidth={3}
                    />

                    <MouseCoordinateX
                        at="bottom"
                        orient="bottom"
                        displayFormat={timeFormat("%Y-%m-%d")} />
                    <MouseCoordinateY
                        at="right"
                        orient="right"
                        displayFormat={format(".4s")} />
                </Chart>
                <CrossHairCursor />
            </ChartCanvas>
        );
    }
}

export default fitWidth(FundNavChart);