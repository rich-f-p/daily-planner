
// current day is displayed at the top of the calendar
function displayTime(){
    time = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
    $('#currentDay').text(time);
}
// updates clock every second
function clock(){
    displayTime();
    setInterval(function(){
        displayTime();

    }, 1000)
}
// timeblock is color coded to indicate whether it is in the past, present, or future
function color(){
    $('textarea').each(function(){
        var blockTime = parseInt($(this).attr('data'));
        var timeHour = moment().format('H');  
        console.log(blockTime)
        console.log(timeHour)
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
// enter an event
// event is saved in local storage through click on button
$('.saveBtn').on('click',function(){
        var timeOfEvent = $(this).siblings('.description').attr('data');
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
function refresh(){
    $('*[data]').each(function () {
        $(this).val(localStorage.getItem($(this).attr('data')));
      });
}
//start everthing
clock();
color();
refresh();