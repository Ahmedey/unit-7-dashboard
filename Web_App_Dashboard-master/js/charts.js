var ctx = document.getElementById("traffic");
var dailyCanvas = document.getElementById("daily-traffic");
var mobileCanvas = document.getElementById("mobile-users");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    xLabels: [
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31"
    ],
    yLabels: ["500", "1000", "1500", "2000", "2500"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          0,
          750,
          1250,
          1000,
          1500,
          2000,
          1500,
          1750,
          1250,
          1750,
          2250,
          1750,
          2250
        ],
        backgroundColor: "rgb(45, 47, 75, 0.2)",
        borderColor: "#7477bf",
        borderWidth: 1
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

var myDailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: {
    responsive: false,
    maintainAspectRatio: false,
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "",
        data: [75, 100, 175, 125, 225, 200, 100],
        backgroundColor: "#7477bf"
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            offsetGridLines: true
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            offsetGridLines: true
          }
        }
      ]
    }
  }
});


var doughnutChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: {
      responsive: false,
      maintainAspectRatio: false,
      labels: ["Phones", "Tablets", "Desktop"],
      datasets: [{
        backgroundColor: ["#008080", "#2ecc71", "#7477bf"],
        data: [20, 15, 65]
      }]
    },
    options: {
      legend: {
        position: 'right',
      },
      rotation: -0.6 * Math.PI,
    }
  });