
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
function displayTime(){
    time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    $('#currentDay').text(time);
}
function clock(){
    displayTime();
    setInterval(function(){
        displayTime();

    }, 1000)
}
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

function color(){
    $('textarea').each(function(){
        var blockTime= $(this).attr('data');
        var timeHour= moment().format('H'); 
        if (timeHour>blockTime){
            $(this).removeClass('present')
            $(this).removeClass('future')
            $(this).addClass('past')
        }else if (timeHour<blockTime){
            $(this).removeClass('present')
            $(this).addClass('future')
            $(this).removeClass('past')
        }else {
            $(this).addClass('present')
            $(this).removeClass('future')
            $(this).removeClass('past')
        }
    })
}
// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
$('.saveBtn').on('click',function(){
        var timeOfEvent = $(this).siblings('.description').attr("data");
        console.log(timeOfEvent)
        var perform = $(this).siblings('.description').val();
        console.log(perform)
        function save(){
            localStorage.setItem(timeOfEvent, perform);
        }
        save();
})


// WHEN I refresh the page
// THEN the saved events persist
clock();
color();
/* how to generate time blocks in js */