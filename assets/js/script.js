var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(document).ready(function () {
  saveBtn.on("click", function () {
    var text = $(this).siblings(".description").val().trim();
    console.log(text);
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  function colorBlocks() {

    var timeNow = moment().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour);

      if (blockHour < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockHour === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  colorBlocks();
});
