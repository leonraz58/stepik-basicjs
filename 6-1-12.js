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

function addShip(id, data) {
    starships[id] = data;
}
  
addShip('desitiny', {
      name: 'Destiny',
      shields: true,
      weapons: true,
      engine_power: 100
});

console.log(starships.desitiny.name);