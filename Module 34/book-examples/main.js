//function printNames(){
  // document.write("John");
    //document.write("<br>");
    //setTimeout(function () {document.write("Ana");}, 3000);
    //document.write("Bob");
//}

//printNames();

var colors=['red','green','blue','purple'];


    function changeNBgColor(){
        document.querySelector('body').style.background=
        colors[Math.floor(Math.random()*colors.length)];
    }

    var names =['John','Ana','Bob','Mark'];

    function changeName(){
        document.querySelector('p').innerHTML=
        names[Math.floor(Math.random()*names.length)];
    }
    setInterval(changeNBgColor, 1000);
    setInterval(changeName, 1000)
