export interface IChildChart {
    label: string;
    value: number;
}

export interface IChildChartDataPoints {
    dataPoints: IChildChart[];
}

export interface IChildChartBar {
    label: string;
    value: number;
    maxValue: number;
}