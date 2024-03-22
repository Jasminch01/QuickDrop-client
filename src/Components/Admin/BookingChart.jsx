import { Component } from "react";
import Chart from "react-apexcharts";

class  BookingChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "bar-chart",
        },
        xaxis: {
          categories: ["1/3/2024", "1/4/2024","1/5/2024","1/6/2024","1/7/2024","1/8/2024", "1/9/2024",],
        },
      },
      series: [
        {
          name: "series-1",
          data: [5, 7, 2, 10, 40, 5, 7],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width={600}

            />
          </div>
        </div>
      </div>
    );
  }
}

export default BookingChart;
