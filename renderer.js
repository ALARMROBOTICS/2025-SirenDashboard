import { NT4_Client } from "./NT4.js";

const toDashboard = "/datatable/";
const toRobot = "/robot/";
const x = "x";
const y = "y";
// Lines 3-6 don't do anything related to the code  


var reefLevelState = 0;

const ID_Bool = [false, false, false, false, false, false, 
  false, false, false, false, false, false,
  false, false, false, false, false, false,
  false, false, false, false, false, false,
  false, false, false, false, false, false,
  false, false, false, false, false, false
];

const ntClient = new NT4_Client(
    '172.22.11.2',
    "2079_Dashboard",
    (topic) => {
      // Topic announce
    },
    (topic) => {
      // Topic unannounce
    },
    (topic, timestamp, value) => {

        if(topic.name === "/ID_10_21/L_L4") {
            document.getElementById('info').innerText =
            `L_L4: ${value}`;
        }
console.log('Data recievied', topic.name);
    },
    () => {
      // Connected
    },
    () => {
      // Disconnected
      console.log('Disconnected');
    }
  );  

  //Subscribing to the enteries in the network table 
  ntClient.subscribe(
    [
      //ID_10_21
      "/ID_10_21/L_L4",
      "/ID_10_21/L_L3",
      "/ID_10_21/L_L2",
      "/ID_10_21/R_L4",
      "/ID_10_21/R_L3",
      "/ID_10_21/R_L2",
      //ID_11_20
      "/ID_11_20/L_L4",
      "/ID_11_20/L_L3",
      "/ID_11_20/L_L2",
      "/ID_11_20/R_L4",
      "/ID_11_20/R_L3",
      "/ID_11_20/R_L2",
      //ID_6_19
      "/ID_6_19/L_L4",
      "/ID_6_19/L_L3",
      "/ID_6_19/L_L2",
      "/ID_6_19/R_L4",
      "/ID_6_19/R_L3",
      "/ID_6_19/R_L2",
      //ID_7_18
      "/ID_7_18/L_L4",
      "/ID_7_18/L_L3",
      "/ID_7_18/L_L2",
      "/ID_7_18/R_L4",
      "/ID_7_18/R_L3",
      "/ID_7_18/R_L2",
      //ID_8_17
      "/ID_8_17/L_L4",
      "/ID_8_17/L_L3",
      "/ID_8_17/L_L2",
      "/ID_8_17/R_L4",
      "/ID_8_17/R_L3",
      "/ID_8_17/R_L2",
      //ID_9_16
      "/ID_9_22/L_L4",
      "/ID_9_22/L_L3",
      "/ID_9_22/L_L2",
      "/ID_9_22/R_L4",
      "/ID_9_22/R_L3",
      "/ID_9_22/R_L2"
    ],
    false,
    false,
    0.02
  );

  document.getElementById('myButton4').addEventListener('click', function() {
    console.log('l4');
    // document.getElementById('info').innerText = 'L3 Was Succesful';
    reefLevelState = 4;
    console.log("Reefstate: " + reefLevelState);
});

document.getElementById('myButton3').addEventListener('click', function() {
  console.log('l3');
  // document.getElementById('info').innerText = 'L3 Was Succesful';
  reefLevelState = 3;
  console.log("Reefstate: " + reefLevelState);
});

document.getElementById('myButton2').addEventListener('click', function() {
  console.log('l2');
  // document.getElementById('info').innerText = 'L3 Was Succesful';
  reefLevelState = 2;
  console.log("Reefstate: " + reefLevelState);
});

  document.getElementById('reefA').addEventListener('click', function() {
  console.log('Reef A');
 updateDashbaord("/ID_7_18/L_L4", "/ID_7_18/L_L3", "/ID_7_18/L_L2", 0, 1, 2);
});

  document.getElementById('reefB').addEventListener('click', function() {
  console.log('Reef B');
 updateDashbaord("/ID_7_18/R_L4", "/ID_7_18/R_L3", "/ID_7_18/R_L2", 3, 4, 5);
});

document.getElementById('reefC').addEventListener('click', function() {
  console.log('Reef C');
 updateDashbaord("/ID_8_17/L_L4", "/ID_8_17/L_L3", "/ID_8_17/L_L2", 6, 7, 8);
});

  document.getElementById('reefD').addEventListener('click', function() {
  console.log('Reef 9');
 updateDashbaord("/ID_8_17/R_L4", "/ID_8_17/R_L3", "/ID_8_17/R_L2", 9, 10, 11);
});


document.getElementById('reefE').addEventListener('click', function() {
  console.log('Reef E');
 updateDashbaord("/ID_9_22/L_L4", "/ID_9_22/L_L3", "/ID_9_22/L_L2", 12, 13, 14);
});

  document.getElementById('reefF').addEventListener('click', function() {
  console.log('Reef F');
 updateDashbaord("/ID_9_22/R_L4", "/ID_9_22/R_L3", "/ID_9_22/R_L2", 15, 16, 17);
});


document.getElementById('reefG').addEventListener('click', function() {
  console.log('Reef G');
 updateDashbaord("/ID_10_21/L_L4", "/ID_10_21/L_L3", "/ID_10_21/L_L2", 18, 19, 20);
});

  document.getElementById('reefH').addEventListener('click', function() {
  console.log('Reef H');
 updateDashbaord("/ID_10_21/R_L4", "/ID_10_21/R_L3", "/ID_10_21/R_L2", 21, 22, 23);
});

document.getElementById('reefI').addEventListener('click', function() {
  console.log('Reef I');
 updateDashbaord("/ID_11_20/L_L4", "/ID_11_20/L_L3", "/ID_11_20/L_L2", 24, 25, 26);
});

  document.getElementById('reefJ').addEventListener('click', function() {
  console.log('Reef J');
 updateDashbaord("/ID_11_20/R_L4", "/ID_11_20/R_L3", "/ID_11_20/R_L2", 27, 28, 29);
});

document.getElementById('reefK').addEventListener('click', function() {
  console.log('Reef K');
 updateDashbaord("/ID_6_19/L_L4", "/ID_6_19/L_L3", "/ID_6_19/L_L2", 30, 31, 32);
});

  document.getElementById('reefL').addEventListener('click', function() {
  console.log('Reef L');
 updateDashbaord("/ID_6_19/R_L4", "/ID_6_19/R_L3", "/ID_6_19/R_L2", 33, 34, 35);
});

function updateDashbaord(ID_L4, ID_L3, ID_L2, i, j, k) {
  if(reefLevelState === 4) {
    ntClient.publishTopic(ID_L4, "boolean");
    ntClient.addSample(ID_L4, !ID_Bool[i]);
    ID_Bool[i] = !ID_Bool[i];
  } else if(reefLevelState === 3) {
    ntClient.publishTopic(ID_L3, "boolean");
    ntClient.addSample(ID_L3, !ID_Bool[j]);
    ID_Bool[j] = !ID_Bool[j];
  } else if(reefLevelState === 2) {
    ntClient.publishTopic(ID_L2, "boolean");
    ntClient.addSample(ID_L2, !ID_Bool[k]);
    ID_Bool[k] = !ID_Bool[k];
  }
}

// ntClient.publishTopic("/datatable/y", "double");
// ntClient.addSample("/datatable/y", 2079.0);

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

