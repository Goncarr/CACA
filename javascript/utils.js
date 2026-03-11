const scrollbutton = document.querySelector(".scroll-to-top");
const ctx = document.getElementById("myChart");
let myChart;
let jsonData;
let currentChartType = "line";

function loadData(jsonUrl,button) {
  fetch(jsonUrl)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Falha ao carregar os dados de: ${jsonUrl}`);
    })
    .then(function (data) {
      jsonData = data;
      Createchart(jsonData, currentChartType,button);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function setChartType(chartType) {
  currentChartType = chartType;
  if (jsonData) {
    Createchart(jsonData, currentChartType);
  }
}

function Createchart(data, type, button) {
  if (!ctx) {
    console.warn("Canvas element not found: #myChart");
    return;
  }

  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
         label:button,
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

const refreshbuttonVisibility = () => {
  if (document.documentElement.scrollTop <= 150) {
    scrollbutton.style.display = "none";
  } else {
    scrollbutton.style.display = "block";
  }
};

refreshbuttonVisibility();

scrollbutton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", () => {
  refreshbuttonVisibility();
});

// Investigação

let currentIndex = 0;

function getVisibleCount() {
  if (window.innerWidth <= 980) return 1;
  if (window.innerWidth <= 1350) return 2;
  return 3;
}

function updateSlider() {
  const track = document.getElementById('track');
  if (!track) return;

  const cards = track.querySelectorAll('.investigacao-contentor');
  const total = cards.length;
  const visible = getVisibleCount();
  const maxIndex = total - visible;

  if (currentIndex < 0) currentIndex = maxIndex;
  if (currentIndex > maxIndex) currentIndex = 0;

  // Calcula deslocamento com base na largura real do card (inclui margens)
  const card = cards[0];
  const style = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth
    + parseInt(style.marginLeft)
    + parseInt(style.marginRight);

  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function moveSlide(direction) {
  currentIndex += direction;
  updateSlider();
}

// Recalcula posição ao redimensionar para não ficar desalinhado
window.addEventListener('resize', updateSlider);
loadData('utils/datainvestigacao.json');