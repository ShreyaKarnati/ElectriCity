
var budget = {
  totalBudget: "4,500,000", 
  remainingBudget: 4500000, 
  totalEnergy: "14,000,000", 
  energyProduced: 0,
  emissionsTarget: "55,000,000",
  emissions: 0
};

var hydro =  {
  cost: 1000000, 
  energy: 4000000,
  emissions: 72000000,
  limit: 2, 
  current: 0 
};

var solar = {
  cost: 2000000, 
  energy: 2000,
  emissions: 100000,
  limit: 3, 
  current: 0 
};

var wind = {
  cost: 1000000, 
  energy: 4000000,
  emissions: 0,
  limit: 2, 
  current: 0 
};

var nuclear = {
  cost: 5000000, 
  energy: 6000,
  emissions: 1380000,
  limit: 1, 
  current: 0 
};

var coal = {
  cost: 600000, 
  energy: 3500000,
  emissions: 315000000,
  limit: 3, 
  current: 0 
};

var units = {
  price: "$",
  energy: "MWH",
  emissions: "kg of CO2"
};

var hydroAdd = $('.hydroAdd');
var hydroRemove = $('.hydroRemove');

var solarAdd = $('.solarAdd');
var solarRemove = $('.solarRemove');

var windAdd = $('.windAdd');
var windRemove = $('.windRemove');

var nuclearAdd = $('.nuclearAdd');
var nuclearRemove = $('.nuclearRemove');

var coalAdd = $('.coalAdd');
var coalRemove = $('.coalRemove');

var totalBudget = $('#totalBudget');
var budgetContainer = $('#budgetContainer');

var totalEnergy = $('#totalEnergy');
var energyContainer = $('#energyContainer');

var totalEmissions = $('#totalEmissions');
var emissionsContainer = $('#emissionsContainer');

function setup() {
   
  totalBudget.text(units.price + budget.totalBudget);
  totalEnergy.text(budget.totalEnergy + " " + units.energy);
  totalEmissions.text(budget.emissionsTarget + " " + units.emissions);

  budgetContainer.text("$" + budget.remainingBudget);
  energyContainer.text(budget.energyProduced + " " + units.energy);
  emissionsContainer.text(budget.emissions + " " + units.emissions);
  
}

setup();

hydroAdd.on('click', addHydro);
solarAdd.on('click', addSolar);
windAdd.on('click', addWind);
nuclearAdd.on('click',addNuclear);
coalAdd.on('click', addCoal);

hydroRemove.on('click', removeHydro);
solarRemove.on('click', removeSolar);
windRemove.on('click', removeWind);
nuclearRemove.on('click', removeNuclear);
coalRemove.on('click', removeCoal);

function updateHydro(add) {
  if (add == true) { 
    hydro.current += 1;
    budget.remainingBudget -= hydro.cost;
    budgetContainer.text("$" + budget.remainingBudget);
    budget.energyProduced += hydro.energy;
    energyContainer.text(budget.energyProduced + " " + units.energy);
    budget.emissions += hydro.emissions;
    emissionsContainer.text(budget.emissions + " " + units.emissions);
  }
  else if (add == false) {
    hydro.current -= 1;
    budget.remainingBudget += hydro.cost;
    budgetContainer.text("$" + budget.remainingBudget);
    budget.energyProduced -= hydro.energy;
    energyContainer.text(budget.energyProduced + " " + units.energy);
    budget.emissions -= hydro.emissions;
    emissionsContainer.text(budget.emissions + " " + units.emissions);
  }
}

function updateSolar(add) {
   if (add == true) { 
    solar.current += 1;
    budget.remainingBudget -= solar.cost;
    budgetContainer.text("$" + budget.remainingBudget);
    budget.energyProduced += solar.energy;
    energyContainer.text(budget.energyProduced + " " + units.energy);
    budget.emissions += solar.emissions;
    emissionsContainer.text(budget.emissions + " " + units.emissions);
  }
  else if (add == false) {
    solar.current -= 1;
    budget.remainingBudget += solar.cost;
    budgetContainer.text("$" + budget.remainingBudget);
    budget.energyProduced -= solar.energy;
    energyContainer.text(budget.energyProduced + " " + units.energy);
    budget.emissions -= solar.emissions;
    emissionsContainer.text(budget.emissions + " " + units.emissions);
  }
}

function updateWind(add) {
   if (add == true) { 
    wind.current += 1;
    budget.remainingBudget -= wind.cost;
    budgetContainer.text("$" + budget.remainingBudget);
    budget.energyProduced += wind.energy;
    energyContainer.text(budget.energyProduced + " " + units.energy);
    budget.emissions += wind.emissions;
    emissionsContainer.text(budget.emissions + " " + units.emissions);
  }
  else if (add == false) {
    wind.current -= 1;
    budget.remainingBudget += wind.cost;
    budgetContainer.text("$" + budget.remainingBudget);
    budget.energyProduced -= wind.energy;
    energyContainer.text(budget.energyProduced + " " + units.energy);
    budget.emissions -= wind.emissions;
    emissionsContainer.text(budget.emissions + " " + units.emissions);
  }
}

function updateNuclear(add) {
   if (add == true) { 
    nuclear.current += 1;
    budget.remainingBudget -= nuclear.cost;
    budgetContainer.text("$" + budget.remainingBudget);
    budget.energyProduced += nuclear.energy;
    energyContainer.text(budget.energyProduced + " " + units.energy);
    budget.emissions += nuclear.emissions;
    emissionsContainer.text(budget.emissions + " " + units.emissions);
  }
  else if (add == false) {
    nuclear.current -= 1;
    budget.remainingBudget += nuclear.cost;
    budgetContainer.text("$" + budget.remainingBudget);
    budget.energyProduced -= nuclear.energy;
    energyContainer.text(budget.energyProduced + " " + units.energy);
    budget.emissions -= nuclear.emissions;
    emissionsContainer.text(budget.emissions + " " + units.emissions);
  }
}

function updateCoal(add) {
  if (add == true) {
    coal.current += 1;
    budget.remainingBudget -= coal.cost;
    budgetContainer.text("$" + budget.remainingBudget);
    budget.energyProduced += coal.energy;
    energyContainer.text(budget.energyProduced + " " + units.energy);
    budget.emissions += coal.emissions;
    emissionsContainer.text(budget.emissions + " " + units.emissions);
  }
  else if (add == false) {
    coal.current -= 1;
    budget.remainingBudget += coal.cost;
    budgetContainer.text("$" + budget.remainingBudget);
    budget.energyProduced -= coal.energy;
    energyContainer.text(budget.energyProduced + " " + units.energy);
    budget.emissions -= coal.emissions;
    emissionsContainer.text(budget.emissions + " " + units.emissions);
  }
}

function addHydro() {
  if(hydro.current < hydro.limit) {
    if(hydro.current == 0) {
      var element = document.getElementById("hydro1");
      element.classList.remove("hide");
      updateHydro(true);
    }
    else if (hydro.current == 1) {
      var element = document.getElementById("hydro2");
      element.classList.remove("hide");
      updateHydro(true);
    }
    else {
      alert("Your limit has been reached. \r\nYour limit is " + hydro.limit + " hydro power plants.");
    }
  }
  else {
    alert("Your limit has been reached. \r\nYour limit is " + hydro.limit + " hydro power plants.");
  }
}

function removeHydro() {
  if(hydro.current > 0) {
    if(hydro.current == 1) {
      var element = document.getElementById("hydro1");
      element.classList.add("hide");
      updateHydro(false);
    }
    else if (hydro.current == 2) {
      var element = document.getElementById("hydro2");
      element.classList.add("hide");
      updateHydro(false);
    }
    else {
      alert("You currently don't have any hydro power plants. \r\nYour limit is " + hydro.limit + " hydro power plants.");
    }
  }
  else {
    alert("You currently don't have any hydro power plants. \r\nYour limit is " + hydro.limit + " hydro power plants.");
  }
}

function addSolar() {
  if(solar.current < solar.limit) {
    if(solar.current == 0) {
      var element = document.getElementById("solar1");
      element.classList.remove("hide");
      updateSolar(true);
    }
    else if (solar.current == 1) {
      var element = document.getElementById("solar2");
      element.classList.remove("hide");
      updateSolar(true);
    }
    else if (solar.current == 2) {
      var element = document.getElementById("solar3");
      element.classList.remove("hide");
      updateSolar(true);
    }
    else {
      alert("Your limit has been reached. \r\nYour limit is " + solar.limit + " solar grids.");
    }
  }
  else {
    alert("Your limit has been reached. \r\nYour limit is " + solar.limit + " solar grids.");
  }
}

function removeSolar() {
  if(solar.current > 0) {
    if(solar.current == 1) {
      var element = document.getElementById("solar1");
      element.classList.add("hide");
      updateSolar(false);
    }
    else if (solar.current == 2) {
      var element = document.getElementById("solar2");
      element.classList.add("hide");
      updateSolar(false);
    }
    else if (solar.current == 3) {
      var element = document.getElementById("solar3");
      element.classList.add("hide");
      updateSolar(false);
    }
    else {
      alert("You currently don't have any solar power plants. \r\nYour limit is " + solar.limit + " solar power plants.");
    }
  }
  else {
    alert("You currently don't have any solar power plants. \r\nYour limit is " + solar.limit + " solar power plants.");
  }
}

function addWind() {
  if(wind.current < wind.limit) {
    if(wind.current == 0) {
      var element = document.getElementById("wind1");
      element.classList.remove("hide");
      updateWind(true);
    }
    else if (wind.current == 1) {
      var element = document.getElementById("wind2");
      element.classList.remove("hide");
      updateWind(true);
    }
    else {
      alert("Your limit has been reached. \r\nYour limit is " + wind.limit + " wind turbines.");
    }
  }
  else {
    alert("Your limit has been reached. \r\nYour limit is " + wind.limit + " wind turbines.");
  }
}

function removeWind() {
  if(wind.current > 0) {
    if(wind.current == 1) {
      var element = document.getElementById("wind1");
      element.classList.add("hide");
      updateWind(false);
    }
    else if (wind.current == 2) {
      var element = document.getElementById("wind2");
      element.classList.add("hide");
      updateWind(false);
    }
    else {
      alert("You currently don't have any wind power plants. \r\nYour limit is " + wind.limit + " wind power plants.");
    }
  }
  else {
    alert("You currently don't have any wind power plants. \r\nYour limit is " + wind.limit + " wind power plants.");
  }
}

function addNuclear() {
  if(nuclear.current < nuclear.limit) {
    if(nuclear.current == 0) {
      var element = document.getElementById("nuclear1");
      element.classList.remove("hide");
      updateNuclear(true);
    }
    else {
      alert("Your limit has been reached. \r\nYour limit is " + hydro.limit + " nuclear power plants.");
    }
  }
  else {
    alert("Your limit has been reached. \r\nYour limit is " + hydro.limit + " nuclear power plants.");
  }
}

function removeNuclear() {
  if(nuclear.current > 0) {
    if(nuclear.current == 1) {
      var element = document.getElementById("nuclear1");
      element.classList.add("hide");
      updateNuclear(false);
    }
    else {
      alert("You currently don't have any nuclear power plants. \r\nYour limit is " + nuclear.limit + " nuclear power plants.");
    }
  }
  else {
    alert("You currently don't have any nuclear power plants. \r\nYour limit is " + nuclear.limit + " nuclear power plants.");
  }
}

function addCoal() {
  if(coal.current < coal.limit) {
    if(coal.current == 0) {
      var element = document.getElementById("coal1");
      element.classList.remove("hide");
      updateCoal(true);
    }
    else if (coal.current == 1) {
      var element = document.getElementById("coal2");
      element.classList.remove("hide");
      updateCoal(true);
    }
    else if (coal.current == 2) {
      var element = document.getElementById("coal3");
      element.classList.remove("hide");
      updateCoal(true);
    }
    else {
      alert("Your limit has been reached. \r\nYour limit is " + coal.limit + " coal plants.");
    }
  }
  else {
    alert("Your limit has been reached. \r\nYour limit is " + coal.limit + " coal plants.");
  }
}

function removeCoal() {
  if(coal.current > 0) {
    if(coal.current == 1) {
      var element = document.getElementById("coal1");
      element.classList.add("hide");
      updateCoal(false);
    }
    else if (coal.current == 2) {
      var element = document.getElementById("coal2");
      element.classList.add("hide");
      updateCoal(false);
    }
    else if (coal.current == 3) {
      var element = document.getElementById("coal3");
      element.classList.add("hide");
      updateCoal(false);
    }
    else {
      alert("You currently don't have any coal plants. \r\nYour limit is " + coal.limit + " coal plants.");
    }
  }
  else {
    alert("You currently don't have any coal plants. \r\nYour limit is " + coal.limit + " coal plants.");
  }
}
