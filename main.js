x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
var SpeechRecognition = window.webkitSpeechRecognition ;
var Recognition = new SpeechRecognition ();


function start()
{
 document.getElementById ("status") .InnerHTML="System Is Leasining please speak";
 recognition.start();
}
recognition.onresult=recognition.onresult = function(event) {

    console.log(event); 
   
    content = event.results[0][0].transcript;
   
       document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
       to_number = Number(content);
       if(Number.isInteger(to_number))
       {
         document.getElementById("status").innerHTML = "Started drawing rectangle "; 
         draw_rect = "set";
       }
       else if(Number.isInteger(to_number))
       {
        document.getElementById("status").innerHTML = "Started drawing cirle "; 
        draw_circle = "set";
       {
       else
       {
         document.getElementById("status").innerHTML = "The speech has not recognized a shape "; 
       }
   
   }
   
   function setup() {
     screen_width = window.innerWidth;
     screen_height = window.innerHeight;
   
     canvas = createCanvas(screen_width, screen_height-150);
     canvas.position(0,150);
   }
   
   function draw() {
     if(draw_circle == "set")
     {
       for(var i = 1; i <= to_number; i++)
       {
         x = Math.floor(Math.random() * 700);
         y = Math.floor(Math.random() * 400 );
         image(cirlce, x, y, 50, 50);
       }
       document.getElementById("status").innerHTML = to_number + " circle drawn";
       speak_data = to_number + "circle drawn";
       speak();
       draw_circle = "";
     }
   if(draw_rect == "set")
     {
       for(var i = 1; i <= to_number; i++)
       {
         x = Math.floor(Math.random() * 700);
         y = Math.floor(Math.random() * 400 );
         image(apple, x, y, 50, 50);
       }
       document.getElementById("status").innerHTML = to_number + " rectangle drawn";
       speak_data = to_number + "rectangle drawn";
       speak();
       draw_rect = "";
     }
   }
   
   function speak(){
       var synth = window.speechSynthesis;
   
       var utterThis = new SpeechSynthesisUtterance(speak_data);
   
       synth.speak(utterThis);
   
       speak_data = "";
   }
   function(event){
    console.log (event)
}
 
