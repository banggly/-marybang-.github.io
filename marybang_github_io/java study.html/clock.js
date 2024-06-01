const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0"); // Change "1" to "2" for seconds
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // Call the function immediately to display the current time

// Use setInterval instead of setTimeout to repeatedly call getClock every 1000 milliseconds (1 second)
setInterval(getClock, 1000);
