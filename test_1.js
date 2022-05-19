function Ride_Function() {
    var height, Can_ride;
    height = document.getElementById("height").value;
    Can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
};