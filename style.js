//引用https://developers-dot-devsite-v2-prod.appspot.com/chart/interactive/docs/gallery/piechart?hl=zh-tw
//圓餅圖
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["棋聖", 4500],
    ["十段", 700],
    ["本因坊", 2800],
    ["碁聖", 800],
    ["名人", 3000],
    ["王座", 1400],
    ["王座", 1300],
  ]);

  var options = {
    title: "日本七大棋戰獎金分布圓餅圖",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}