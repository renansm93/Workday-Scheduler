$(document).ready(function () {
  //Moment code for current date and time
  let tDate = moment().format("MMMM Do YYYY");
  let sDate = document.getElementById("currentDay");
  sDate.innerHTML = tDate;
  let hourNow = moment().format("HH");
  

  $("#cFields").click(function (event) {    
    $("textarea").val("");
    localStorage.clear();
  });



  //Relates hour from each time slot comparing it to the actual time and change the color background according to the style.css class
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (hourNow == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (timeDiv > hourNow) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (timeDiv < hourNow) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  //Taking values from time and value  and saves them to local storage
  $(".saveBtn").click(function (event) {
   
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  //Bring items from local storage and put them in proper places
  $("#hour-09 .description").val(localStorage.getItem("09"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));
});


// Media Queries
var x = window.matchMedia("(max-width: 560px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("fSizep").style.fontSize = "14px";
        document.getElementById("fSizeh").style.fontSize = "28px";
        document.getElementById("currentDay").style.fontSize = "15px";
        document.getElementById("cFields").style.fontSize = "15px";
        document.getElementById("hour-09").style.fontSize = "14px";
        for (let i = 10; i < 18; i++) {
            document.getElementById("hour-" + i).style.fontSize = "14px";
        }
    }
      else {
        document.getElementById("fSizep").style.fontSize = "23px";
        document.getElementById("fSizeh").style.fontSize = "64px";
        document.getElementById("currentDay").style.fontSize = "20px";
        document.getElementById("cFields").style.fontSize = "20px";
        document.getElementById("hour-09").style.fontSize = "16px";
        for (let i = 10; i < 18; i++) {
            document.getElementById("hour-" + i).style.fontSize = "16px";
        }

    }

}




