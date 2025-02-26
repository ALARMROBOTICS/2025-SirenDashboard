import { NT4_Client } from "./NT4.js";

const ntClient = new NT4_Client("test.robot", "Test")
    // Add event listener to the button
    document.getElementById('myButton4').addEventListener('click', function() {
        console.log('hi');
        document.getElementById('info').innerText = 'L4 Was Succesful';
    });


    document.getElementById('myButton3').addEventListener('click', function() {
        document.getElementById('info').innerText = 'L3 Was Succesful';
    });


    document.getElementById('myButton2').addEventListener('click', function() {
        document.getElementById('info').innerText = 'L2 Was Succesful';
    });


    document.getElementById('myButton1').addEventListener('click', function() {
        document.getElementById('info').innerText = 'L1 Was Succesful';
    });