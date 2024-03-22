import { Component } from "react";
import Chart from "react-apexcharts";

class  Comparision extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "bar-chart",
        },
        xaxis: {
          categories: [10, 20, 30, 40, 20, 10, 4, 5],
        },
      },
      series: [
        {
          name: "Booked Parcels",
          data: [5, 0, 2, 10, 40, 0, 7, 20, 50],
        },
        {
          name: "Delivery Parcels",
          data: [3, 0, 2, 5, 39, 0, 7, 10, 30],
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
              type="line"
              width={600}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Comparision;
