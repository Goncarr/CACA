const scrollbutton = document.querySelector(".scroll-to-top");
const ctx = document.getElementById("myChart");
let myChart;
let jsonData;

fetch('utils/data.json')
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Falha ao carregar os dados do gráfico");
  })
  .then(function (data) {
    jsonData = data;
    Createchart(data, "bar");
  })
  .catch(function (error) {
    console.error(error);
  });


function setChartType(chartType) {
  if (myChart) {
    myChart.destroy();
  }
  Createchart(jsonData, chartType);
}

function Createchart(data, type) {
  if (!ctx) {
    console.warn("Canvas element not found: #myChart");
    return;
  }

  myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: data.map((row) => row.month),
      datasets: [
        {
          label: "# of Votes",
          data: data.map((row) => row.income),
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

const  refreshbuttonVisibility = () =>{
    if(document.documentElement.scrollTop <= 150){
        scrollbutton.style.display="none";
    }else{
        scrollbutton.style.display="block";
    }
};

refreshbuttonVisibility();
 
scrollbutton.addEventListener("click",() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    

});

document.addEventListener("scroll",(e)=> {
    refreshbuttonVisibility();
});


//investigacao
let currentIndex = 0

  function moveSlide(direction){
    const track = document.getElementById('track');
    const totalSlides = document.querySelectorAll(".investigacao-contentor").length;
    
    const maxIndex = totalSlides - 3;

    currentIndex += direction;
    
    if (currentIndex < 0){
        currentIndex = 0
    }
    else if(currentIndex > maxIndex){
        currentIndex = maxIndex;
    }
    const percentage = currentIndex * 33.333;
    track.style.transform = `translateX(-${percentage}%)`;
  }
