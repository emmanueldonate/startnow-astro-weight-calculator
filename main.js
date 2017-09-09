// Write your JavaScript code here!
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

planets.forEach(function(selectPlanets) {

    $('#planets').append('<option>' + selectPlanets[0] + '</option>');

});


function calculateWeight(weight, selectPlanets) {
    var planetWeight;
    for (var i = 0; i < planets.length; i++) {
        var pair = planets[i];
        var name =pair[0];

        if(selectPlanets === name) {
            planetWeight = pair[1];

            return weight * planetWeight;
    
        }
    }
}


function handleClickEvent() {
    var userWeight= parseFloat($('#userWeight').val());

    var planetName = $('#planets option:selected').text();

    var result = calculateWeight(userWeight, planetName);

    $('#output').text('If you were on  ' + planetName +  ', you would weigh ' + (result) + ' pounds!');
    console.log(result);
}

var button = document.getElementById('calc');
button.onclick = handleClickEvent;

