
var gamecount =0;
var mycount = 0;
var compcount=0;

function rock(){

//  document.getElementById('demo').innerHTML = "rock selected";
  var comp =Math.floor(Math.random() * 3) + 1;
  // document.getElementById("demo3").innerHTML = comp;
  if(comp==1)
  {
      document.getElementById("demo4").innerHTML = "Tie";
      document.getElementById("demo3").innerHTML = "Comp Chose Rock"
  }
  else if (comp==2) {
    document.getElementById("demo4").innerHTML = "comp wins";
    compcount++;
    document.getElementById("count2").innerHTML = compcount;
    document.getElementById("demo3").innerHTML = "Comp Chose Paper"
  }
  else if (comp==3) {
    document.getElementById("demo4").innerHTML = "You win";
    mycount++;
    document.getElementById("count1").innerHTML = mycount;
    document.getElementById("demo3").innerHTML = "Comp Chose Scissor"
  }
  gamecount++;
  if(gamecount==5)
  {
    if(mycount>compcount)
    {
      document.getElementById("announce").innerHTML = "You Won!";
    }
    else if (mycount<compcount) {
      document.getElementById("announce").innerHTML = "Comp Won!";
    }
    else {
      document.getElementById("announce").innerHTML = "Tie!";
    }

  }
}

function paper(){

  // document.getElementById('demo1').innerHTML = "paper selected";
  var comp =Math.floor(Math.random() * 3) + 1;
  // document.getElementById("demo3").innerHTML = comp;
  if(comp==1)
  {
      document.getElementById("demo4").innerHTML = "You Win";
      mycount++;
      document.getElementById("count1").innerHTML = mycount;
      document.getElementById("demo3").innerHTML = "Comp Chose Rock"
  }
  else if (comp==2) {
    document.getElementById("demo4").innerHTML = "Tie";
    document.getElementById("demo3").innerHTML = "Comp Chose Paper"
  }
  else if (comp==3) {
    document.getElementById("demo4").innerHTML = "Comp wins";
    compcount++;
    document.getElementById("count2").innerHTML = compcount;
    document.getElementById("demo3").innerHTML = "Comp Chose Scissor"
  }
  gamecount++;
  if(gamecount==5)
  {
    if(mycount>compcount)
    {
      document.getElementById("announce").innerHTML = "You Won!";
    }
    else if (mycount<compcount) {
      document.getElementById("announce").innerHTML = "Comp Won!";
    }
    else {
      document.getElementById("announce").innerHTML = "Tie!";
    }

  }
}

function scissor(){

  // document.getElementById('demo2').innerHTML = "scissor selected";
  var comp =Math.floor(Math.random() * 3) + 1;
  // document.getElementById("demo3").innerHTML = comp;
  if(comp==1)
  {
      document.getElementById("demo4").innerHTML = "Comp Wins";
      compcount++;
      document.getElementById("count2").innerHTML = compcount;
      document.getElementById("demo3").innerHTML = "Comp Chose Rock"
  }
  else if (comp==2) {
    document.getElementById("demo4").innerHTML = "You win";
    mycount++;
    document.getElementById("count1").innerHTML = mycount;
    document.getElementById("demo3").innerHTML = "Comp Chose Paper"
  }
  else if (comp==3) {
    document.getElementById("demo4").innerHTML = "Tie";
    document.getElementById("demo3").innerHTML = "Comp Chose Scissor"
  }
  gamecount++;
  if(gamecount==5)
  {
    if(mycount>compcount)
    {
      document.getElementById("announce").innerHTML = "You Won!";
    }
    else if (mycount<compcount) {
      document.getElementById("announce").innerHTML = "Comp Won!";
    }
    else {
      document.getElementById("announce").innerHTML = "Tie!";
    }

  }
}

function playAgain() {
  gamecount =0;
  mycount = 0;
  compcount=0;

  document.getElementById("count1").innerHTML = 0;
  document.getElementById("count2").innerHTML = 0;
  document.getElementById("announce").innerHTML = "";
  document.getElementById("demo4").innerHTML = "Result";
}
