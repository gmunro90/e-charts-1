 // Initialize the echarts instance based on the prepared dom
const myChart = echarts.init(document.getElementById('main'));

 // Specify the configuration items and data for the chart
const option = {
  title: {
    text: 'Bitcoin, since you invested'
  },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [1000, 200, 150, 80, 70, 110],
      type: 'line'
    }
  ],
};
 // Display the chart using the configuration items and data just specified.
 myChart.setOption(option);