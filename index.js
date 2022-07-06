 // Initialize the echarts instance based on the prepared dom
const myChart = echarts.init(document.getElementById('main'));

 // Specify the configuration items and data for the chart
// const option = {
//   title: {
//     text: 'Bitcoin, since you invested'
//   },
//   xAxis: {
//     type: 'category',
//     data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       data: [1000, 200, 150, 80, 70, 110],
//       type: 'line'
//     }
//   ],
// };
//  // Display the chart using the configuration items and data just specified.
//  myChart.setOption(option);

 const myPie = echarts.init(document.getElementById('pie'))

 const option1 = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

 myChart.setOption(option1);