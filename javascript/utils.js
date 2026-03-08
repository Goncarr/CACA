const scrollbutton = document.querySelector(".scroll-to-top");
const ctx = document.getElementById("myChart");
let myChart;
let jsonData;
let currentChartType = "line"; 



function loadData(jsonUrl) {
  fetch(jsonUrl)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Falha ao carregar os dados de: ${jsonUrl}`);
    })
    .then(function (data) {
      jsonData = data; 
      Createchart(jsonData, currentChartType); 
    })
    .catch(function (error) {
      console.error(error);
    });
}
function loadData(jsonUrl) {
  fetch(jsonUrl)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Falha ao carregar os dados de: ${jsonUrl}`);
    })
    .then(function (data) {
      jsonData = data; 
      Createchart(jsonData, currentChartType); 
    })
    .catch(function (error) {
      console.error(error);
    });
}

function setChartType(chartType) {
  currentChartType = chartType;
  if (jsonData) {
    Createchart(jsonData, currentChartType);
  currentChartType = chartType;
  if (jsonData) {
    Createchart(jsonData, currentChartType);
  }
}

function Createchart(data, type) {
  if (!ctx) {
    console.warn("Canvas element not found: #myChart");
    return;
  }

  
  if (myChart) {
    myChart.destroy();
  }

  
  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: data.map((row) => row.month),
      datasets: [
        {
          label: "n de investigacoes/ por vez (em cada ano)", 
          label: "n de investigacoes/ por vez (em cada ano)", 
          data: data.map((row) => row.income),
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        },
      },
    },
  });
}

loadData('utils/data.json');

loadData('utils/data.json');

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
        currentIndex = maxIndex;
    }
    else if(currentIndex > maxIndex){
        currentIndex = 0;
    }
    const percentage = currentIndex * 33.333;
    track.style.transform = `translateX(-${percentage}%)`;
  }
}