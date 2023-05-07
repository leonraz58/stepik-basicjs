var starships = {
    uss_enterprise: {
      name: "USS Enterprise",
      shields: false,
      weapons: true,
      engine_power: 90
    },
    millennium_falcon: {
      name: "Millennium Falcon",
      shields: true,
      weapons: true,
      engine_power: 100
    },
    prometheus: {
      name: "Prometheus",
      shields: false,
      weapons: true,
      engine_power: 70
    },
};

function deleteShip(id) {
    if (starships[id]) {
      delete starships[id];
    }
  }
  
  deleteShip("prometheus");

console.log(starships.uss_enterprise.name); 