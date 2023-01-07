// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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

  //display color code based on cuurent hour
  let trackHour = function () {
    $(timeBlock).each(function () {
      let currentHour = dayjs().format('H');
      let block = $(this).attr("id");
      // console.log("cuurent"+currentHour);
      // console.log("block"+block);
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
  //displaySchedule();




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
