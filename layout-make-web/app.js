const sidebarExtend = document.getElementById("sidebar-extend");
const cortina = document.getElementById("cortina");

const items = document.querySelectorAll(".items");

const home = document.getElementById("home");

const maintenance = document.getElementById("maintenance");
const maintenanceItems = document.getElementById("maintenance-items");

const proccess = document.getElementById("proccess");
const proccessItems = document.getElementById("proccess-items");

const user = document.getElementById("user");
const userInfo = document.getElementById("user-info");


const showSidebarItems = (resp, navitems) => {
  userInfo.classList.add("hide");
  if (resp) {
    sidebarExtend.classList.remove("hide");
    cortina.classList.remove("hide");
    items.forEach((item) => item.classList.add("hide"));
    navitems.classList.remove("hide");
  } else {
    sidebarExtend.classList.add("hide");
    cortina.classList.add("hide");
    items.forEach((item) => item.classList.add("hide"));
  }
};

home.addEventListener("mouseenter", () => {
  showSidebarItems(false);
});

maintenance.addEventListener("mouseenter", () => {
  showSidebarItems(true, maintenanceItems);
});

proccess.addEventListener("mouseenter", () => {
  showSidebarItems(true, proccessItems);
});

user.addEventListener("mouseenter", () => {
  showSidebarItems(false);
  userInfo.classList.remove("hide");
  cortina.classList.remove("hide");
});

userInfo.addEventListener("mouseleave", () => {
  userInfo.classList.add("hide");
  cortina.classList.add("hide");
});

sidebarExtend.addEventListener("mouseleave", () => {
  showSidebarItems(false);
});

cortina.addEventListener("click", () => {
  showSidebarItems(false);
});



var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Universidad', 'Institutos'],
        datasets: [{
            label: 'My First dataset',
            borderWidth:2,
            
            backgroundColor: ['rgb(45, 183, 241)','rgb(147, 212, 239)'],
            borderColor: ['rgb(45, 183, 241)','rgb(147, 212, 239)'],
            data: [25, 40],
            
        }]
    },

    // Configuration options go here
    options: {
      legend:{
        display:true,
        labels:{
          fontColor:'#6F92A0',
          fontSize: 12,
          padding:10
        }

      },
      responsive	: true,
      enable:false,
    
      aspectRatio : 1,
      cutoutPercentage: 75,
      
  
    }

    
});


