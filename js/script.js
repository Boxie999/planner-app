//getting data from local storage
var localStorageInput = JSON.parse(localStorage.getItem('userInput'));
//showing the current date using moment api and adding it to the currentday element
const now = moment().format('MMMM Do YYYY');
const timeNow = $('#currentDay');
timeNow.text(now.toString()); //it displays the current day
var saveBtn = $('button');

var userInput = localStorageInput || []; //storing user input and timeblock here

// this function is adding colour codes to the timeblock, based on the current time
var blocks = $('input');

blocks.each(function() {
  
    var thisHour = moment().format('k');
    
    var hour = $(this).attr('data-hour');
    
    if (thisHour > hour) {
        $(this).css('background-color', '#d3d3d3');
    }
    else if (thisHour === hour) {
        $(this).css('background-color', '#ff6961');
    }
    else if (thisHour < hour) {
        $(this).css('background-color', '#77dd77');
    }

}); 
    //this click event pushes the user input and the timeblock to the userinput array
    //and stores them in the local storage
        saveBtn.click(function (event) {
            event.preventDefault();
            var inputText = $(this).parent().siblings('input').val();
            console.log(inputText);
            var timeblockValue = $(this).attr('id');
            userInput.push({input: inputText, time: timeblockValue });
            console.log(userInput);
            localStorage.setItem( "userInput", JSON.stringify(userInput));
            
          });


