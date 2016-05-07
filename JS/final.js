function diceRoller(){
  var randomNumber = [
    1,
    2,
    3,
    4,
    5,
    6
  ];
  return randomNumber [Math.floor(Math.random() * randomNumber.length)];
}
function main(){
  var name = "";
  var output = "";
  var randoNum = "";
  var total = 0;
  var userInput = "";
  
  name = prompt("What is your name?");
  alert(name + " you need to make it to the supplies, you will be safe here.");
  while (total < 100){
    randoNum = diceRoller();
    if (total === 2 || total === 5 || total === 10 || total === 12 || total === 40 || total === 42 || total === 45 || total === 52){
      userInput = prompt("Go down the dirt path or the brick path?");
      userInput = userInput.toUpperCase();
      if (userInput === "DIRT"){
        alert(name + " has come along some fruit");
        total = (randoNum + total);
        userInput = prompt("Eat the fruit or don't?");
        userInput = userInput.toUpperCase();
        if (userInput === "EAT"){
          alert(name + " feels refreshed and ready to go! " + total + " out of 100");
          total = (randoNum + total);
          if (total === 7 || total === 11 || total === 14 || total === 16 || total === 41 || total === 46 || total === 51 || total === 56){
            userInput = prompt("You see yet another split in the paths. Do you jump in the water and swim or jump across the broken path?");
            userInput = userInput.toUpperCase();
            if (userInput === "JUMP"){
              alert("You start jumping over gaps and almost fall. But you get across safely.");
              total = (randoNum + total);
            } else if (userInput === "SWIM"){
              alert("You jumped into the water and realize there are sharks.");
              output = ("<p>The sharks tore you to shreds and played pass the shreds with your remains.</p>");
              output += ("<p>Refresh page if you want to try again!</p>");
              document.write('<img src="./images/sharks.jpg"/>');
              total = 100;
            } else {
              output = ("<p>You didn't choose a right answer.</p>");
              output += ("<p>Refresh page if you want to try again!</p>");
              document.write('<img src="./images/lose.jpg"/>');
              total = 100;
            }
          } 
        } else if (userInput === "DON'T"){
          alert("You continue hoping you will find food");
          total = (randoNum + total);
          userInput = prompt("You see two more paths. gorilla path or berry path? " + total + " out of 100");
          userInput = userInput.toUpperCase();
          if (userInput === "GORILLA"){
            alert("The gorillas come over with bananas. Being greatful you pat his head and continue");
            total = (randoNum + total);
            alert("You see some supplies. You think to yourself you've made it, when you see another survivor running from a killer turtle");
            userInput = prompt("Do you save the survivor or ignore him?", "Save, Ignore");
            userInput = userInput.toUpperCase();
            if (userInput === "SAVE"){
              alert("You die from a killer turtle.");
              output = ("<p>The turtle shanked you with a knife and his buddies came and ate your ears and left your body to rot.</p>");
              output += ("<p>Refresh page if you want to try again!</p>");
              document.write('<img src="./images/turtle.jpg"/>');
              total = 100;
            } else if (userInput === "IGNORE"){
              output = ("You ignore the survivor and watch the turtle shank him. But then go away.");
              total = (randoNum + total);
            }
          } else if (userInput === "BERRY"){
            alert("Natives come out and rip your eyes out.");
            output = ("The natives ripped your eyes out colored them like berries. They took your body and tore it into pieces to sacrifice to their animals");
            document.write('<img src="./images/berry.jpg"/>\n');
            total = 100;
          } else {
            output = ("<p>You didn't choose a right answer.</p>");
            output += ("<p>Refresh page if you want to try again!</p>");
            document.write('<img src="./images/lose.jpg"/>');
            total = 100;
          }
        } else {
          output = ("<p>You didn't choose a right answer.</p>");
          output += ("<p>Refresh page if you want to try again!</p>");
          document.write('<img src="./images/lose.jpg"/>');
          total = 100;
        }
      } else if (userInput === "BRICK"){
        alert("The brick path falls apart and you fall into a alligator pit and die.");
        output = ("The alligators eat " + name + "'s body by ripping each limb off.");
        total = 100;
        document.write('<img src="./images/alligator.jpg"/>');
        output = ("<p>The alligators eat " + name + "'s body by ripping each limb off.</p>");
        output += ("Refresh page if you want to try again!");
      } else {
        output = ("<p>You didn't choose a right answer.</p>");
        output += ("<p>Refresh page if you want to try again!</p>");
        document.write('<img src="./images/lose.jpg"/>');
        total = 100;
      }
    } else {
      total = (randoNum + total);
      alert("You moved forward " + randoNum + " steps. You keep searching for the supplies." + total + " out of 100");
      if (total >= 100){
      output += ("<p>Help has arrived and tells " + name + " how lucky they are!</p>");
      output += ("<p>Refresh page if you want to try again!</p>");
      document.write('<img src="./images/youwin.jpg"/>');
      }
    }
    document.write(output);
    
  
  
  }

}
main();  

/* No credit for ANY pictures are being takin. Refrences: Google searches. youwin.jpg: google search: you win. alligator.jpg: google search: alligator pit.
berry.jpg: google search: berry bush eyes. shark.jpg: google search: sharks. lose.jpg: google search: you lose.*/