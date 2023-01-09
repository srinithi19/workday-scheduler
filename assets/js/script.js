
$(function () {
  let timeBlock = $(".time-block");

  //used day.js to display the current date in the header of the page.
  function displayTime() {
    let timeDisplayEl = $("#currentDay");
    let now = dayjs().format("dddd [-] MMM DD, YYYY [at] hh:mm A");
    timeDisplayEl.text(now);
  }
  //used setInterval to increment the minutes and display time without refreshing page.
  setInterval(displayTime, 1000);

  //display schdule stored in local storage
  function displaySchedule() {
    for (let i = 0; i < timeBlock.length; i++) {
      hourId = timeBlock[i].id;
      let textArea = timeBlock[i].children[1];
      $(textArea).val(localStorage.getItem(hourId));
    }
  }


  //display color code based on cuurent hour
  let trackHour = function () {
    $(timeBlock).each(function () {
      let currentHour = dayjs().format('HH');
      let block = $(this).attr("id");
      //console.log("cuurent"+currentHour);
      //console.log("block"+block);
      if (block > currentHour) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      } else if (block < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      }
    });
  };
  trackHour();
  displaySchedule();

  // Added a listener on click of the save button 
  //to save the hour and schedule in local storage
  $('.saveBtn').on('click',function() {
    var hourEl = $(this).parent().attr('id');
    var textEl = $(this).siblings('.description').val();
    //console.log(hourEl,textEl);
    localStorage.setItem(hourEl,textEl);
  });
});
