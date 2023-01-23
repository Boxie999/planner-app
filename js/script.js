//showing the current date using moment api and adding it to the currentday element
const now = moment().format('MMMM Do YYYY');
const timeNow = $('#currentDay');
timeNow.text(now.toString());
var saveBtn = $('button');

var userInput = [];

// this function is adding colour codes to the timeblock, based on the current time
var blocks = $('input');


blocks.each(function() {
  
    var thisHour = moment().format('k');
    console.log(thisHour);

    var hour = $(this).attr('id');

    if (hour < thisHour) {
        $(this).css('background-color', '#d3d3d3');
    }
    else if (hour === thisHour) {
        $(this).css('background-color', '#ff6961');
    }
    else if (hour > thisHour) {
        $(this).css('background-color', '#77dd77');
    }

}); 


saveBtn.click(function (event) {
    event.preventDefault();
    var inputText = $('input:text').val();
    console.log(inputText);
    userInput.push({input: inputText, time: $(this).attr('id') });
    console.log(userInput);
    localStorage.setItem( "value", JSON.stringify(userInput));
   
  });


// 4. Load input from local storage when page load/refresh if there's any data in local storage
//      var localStorageInput = get data from local storage
//      check if localStorageInput exist, if it is
//          var parsedLocalStorageInput = parse localStorageInput
//          populate the inputs with the value from parsedLocalStorageInput
//          inputs.forEach(function(input) {
//              input => {
//                time: 9,
//                input: 'Meeting',
//              }
//              $('.timeblock[data-hour="' + input.time + '"] textarea').val(input.input)
//          })
//      if theres no data in local storage, do nothing

// Extra, add hover effect on the save button