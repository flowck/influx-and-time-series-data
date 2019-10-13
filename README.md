# influx-and-time-series-data

## Context

Visualizing data can be a challenge due to the following possibilities:

1 - Visualize data with a large window of time with short data rate: 

``` 10 years of data, with a data point interval of 10 minutes =  ```

For this case, the API would need to return have ```5,256,000``` data points. 

``` Good luck trying to render this amount of points in the browser. ```

Instead of that, we can resample the data by decreasing the data rate, so instead of 10 minutes on 10 years of data, we could have 1 day on 10 years of data. This we would have 3,650 data points.

As you can imagine, these operations are too heavy and network costly to be done in memory with Nodejs. Instead, we will rely on a proper database that handles time-series data efficiently, in this case, [InfluxDB](https://www.influxdata.com/).

## Goals

- Import time-series data from a dataset
- Save data into an influx database
- Query data applying [resample](https://machinelearningmastery.com/resample-interpolate-time-series-data-python/) operations:
  - Downsampling
  - Upsampling
- Visualize data on a [line-chart](https://apexcharts.com/javascript-chart-demos/line-charts/brush-chart/) plot

## Non-Goals

- Implement a cached API
- Implement a secure and production-ready API

## Architecture

* Data importer: from dataset ```json file``` to ```InfluxDB```
* API
* UI

![Project overview](./Docs/Diagrams/project-overview.png)

## How to run

In this section, I describe the steps to run this project with docker without the need of installing any dependencies and also in development mode, if you want to dig into the code.

### Docker

1 - Run the compose file to boot the API and the UI:

    cd app
    docker-compose build
    docker-compose up

2 - Open the browser and navigate to [http://localhost:8080](http://localhost:8080)

### Development mode

#### API

1 - Navigate to the API folder

    cd app/api

2 - Install dependencies

    npm install

3 - Run API

    npm run dev

4 - Run prettier auto-complete

    npm run p:w

#### UI

1 - From the root of ```./app```, run:

    cd ui
    npm install

2 - Run UI

    npm run serve

## License

Under the [MIT license](./LICENSE.md)