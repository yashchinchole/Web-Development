$(document).ready(function () {
  //   $("h1").css("color", "red");
});
$("h1").addClass("big-title al");

$("h1").text("bye bye");

$("a").attr("href", "https://yash.com");

for (var i = 0; i < 4; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "red";
  });
}

$("button").click(function () {
  $("h1").css("color", "purple");
});

$("input").keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").text("hwyyyyyboi");
});

$("h1").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
