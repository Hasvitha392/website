
if(document.getElementById('navbar'))
{

$("#navbar a").hover(function(){
  $(this).css("color", "black");
  }, function(){
  $(this).css("color", "#706fd3");
});
}
if(document.getElementById('navbar'))
{
window.onscroll = function()

{myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction()
{
  if(window.pageYOffset >= sticky)
  {
    navbar.classList.add("sticky");
  }
  else
  {
    navbar.classList.remove("sticky");
  }
}
}

function change_Image() {

    var x = document.getElementById('changingImage');
    var str = document.getElementById('changingImage').src;

    if (str.includes("images/1.jpeg")) {

        x.src = "images/2.jpeg";}
        else if (str.includes("images/2.jpeg")) {

        x.src = "images/3.jpeg";}
        else if (str.includes("images/3.jpeg")) {

        x.src = "images/4.jpeg";}
        else if (str.includes("images/4.jpeg")) {

        x.src = "images/5.jpeg";}
        else if (str.includes("images/5.jpeg")) {

        x.src = "images/1.jpeg";}
        else {
        	x.src="images/1.jpeg";
        }


    }

    if (document.getElementById("countButton")) {
  var count = 0;
  var button = document.getElementById("countButton");
  var display = document.getElementById("displayCount");

  if (localStorage.getItem('count')) {
    count = localStorage.getItem('count')
  } else count = 0;

  display.innerHTML = count;

  button.onclick = function () {
    count++;
    localStorage.setItem('count', count);
    display.innerHTML = count;
  }
}

if (document.getElementById("formElement")) {
  var formElement = document.getElementById("formElement");


  var feedBackList=[];
  var submissionCounter = 1

  if(localStorage.getItem('feedBackList')){
      feedBackList = JSON.parse(localStorage["feedBackList"])
      submissionCounter = feedBackList[feedBackList.length-1].entry
    }

    for(i=0; i<feedBackList.length; i++)
    {
      var row = document.getElementById("feedBackTable").insertRow();
      var cell1 = row.insertCell(0);  
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);

      cell1.innerHTML = feedBackList[i].entry;
      cell2.innerHTML = feedBackList[i].name;
      cell3.innerHTML = feedBackList[i].skill;
      cell4.innerHTML = feedBackList[i].level;
       cell5.innerHTML = feedBackList[i].comment;
    } 
    

  formElement.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var personName = document.getElementById("personName").value;
    var skill = document.getElementById("skill").value;
    var level = document.getElementById("level").value;
    var comment = document.getElementById("comment").value;
    /*alert("Thanks for your feedback");*/
    addFeedback(personName, skill, level, comment);
    clearForm();
  });

  
  function addFeedback(personName, skill, level, comment) {   

    submissionCounter += 1;

    feedBackList.push({

        entry: submissionCounter,  
        name: personName,
        skill: skill,
        level: level,
        comment: comment
    });
  
    localStorage.setItem('feedBackList', JSON.stringify(feedBackList));

      var row = document.getElementById("feedBackTable").insertRow();
      var cell1 = row.insertCell(0);  
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);

      cell1.innerHTML = feedBackList[feedBackList.length-1].entry;
      cell2.innerHTML = feedBackList[feedBackList.length-1].name;
      cell3.innerHTML = feedBackList[feedBackList.length-1].skill;
      cell4.innerHTML = feedBackList[feedBackList.length-1].level;
      cell5.innerHTML = feedBackList[feedBackList.length-1].comment;
    
  }


  function clearForm() {
    document.getElementById("personName").value = ""; 
    document.getElementById("skill").selectedIndex = 0; 
    document.getElementById("level").selectedIndex = 0;
    document.getElementById("comment").value = ""; 
  }

}


