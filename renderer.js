import { NT4_Client } from "./NT4.js";

const toDashboard = "/datatable/";
const toRobot = "/robot/";
const x = "x";
const y = "y";

const yValue = 2079.0;

const ntClient = new NT4_Client(
    '172.22.11.2',
    "2079dashboard",
    (topic) => {
      // Topic announce
    },
    (topic) => {
      // Topic unannounce
    },
    (topic, timestamp, value) => {
      // New data
    //   if (topic.name === toDashboard + "x") {
    //     selectedLevel = value;
    //   } else if (topic.name === toDashboardPrefix +"y") {
    //     l1State = value;
    //   } else {
    //     return;
    //   }
    //   document.body.style.backgroundColor = "white";
    //   updateUI();

        if(topic.name === "/datatable/x"){
            document.getElementById('info').innerText =
            `X: ${value}`;
        }
console.log('Data recievied', topic.name);
    },
    () => {
      // Connected
    },
    () => {
      // Disconnected
      document.body.style.backgroundColor = "red";
    }
  );  

  ntClient.subscribe(
    [
      "/datatable/x",
      "/datatable/y",
    ],
    false,
    false,
    0.02
  );

  

  document.getElementById('myButton4').addEventListener('click', function() {
    console.log('l4');
    if (ntClient && typeof ntClient.publishTopic === 'function' && typeof ntClient.addSample === 'function') {
        ntClient.publishTopic("/datatable/y", "double");
        ntClient.addSample("/datatable/y", 2079.0);
    } else {
        console.error("ntClient is not properly initialized or methods are not available.");
    }
});

  ntClient.connect();

function handleButtonClick(event) {
    console.log('Button clicked', event.target.id);
}

document.addEventListener('DOMContentLoaded', (event)  => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
}); 

