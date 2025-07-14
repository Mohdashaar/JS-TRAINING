let trafficSignal = "yellow"; 
if (trafficSignal.toLowerCase() === "red") {
    console.log("Stop");
} else if (trafficSignal.toLowerCase() === "yellow") {
    console.log("Get Ready");
} else if (trafficSignal.toLowerCase() === "green") {
    console.log("Go");
} else {
    console.log("Invalid traffic signal color");
}
