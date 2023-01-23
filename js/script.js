//showing the current date using moment api and adding it to the currentday element
const now = moment().format('MMMM Do YYYY');
const timeNow = $('#currentDay');
timeNow.text(now.toString());



var timeblocks = $('.timeblock');

timeblocks.each(function() {
  
    var thisHour = moment().format('k');
    console.log(thisHour);

    var hour = $(this).attr('data-hour');

    if (hour < thisHour) {
        $(this).css('background-color', 'grey');
    }
    else if (hour === thisHour) {
        $(this).css('background-color', 'red');
    }
    else if (hour > thisHour) {
        $(this).css('background-color', 'green');
    }
}); 




// 3. Save input to local storage
//      create variable (an array) called inputs that will store all of the input data
//      Add event listener to all save button
//          Add event.preventDefault inside the click event listener
//          Push the input value to inputs array with the format of { time: xx, input: xxx }
//              Get the input value
//              Get the hour value
//              Push to the inputs array if the hour entry not exist yet in the array
//              Replace the existing entry if the hour entry exist in the array
//          Save inputs variable to local storage
//              Stringify the inputs array
//          Show feedback message to the user (optional)
//          The feedback need to be dissappeared automatically
//
//      Example of inputs array format
//      var inputs = [{
//        time: 9,
//        input: 'Meeting',
//      },{
//        time: 10,
//        input: 'Coffee',
//      },...];
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