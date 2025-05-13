function function1() {
    // Hide the Explore Now button
    document.getElementById("popupbutton").style.display = "none";

    // Show the video popup
    document.getElementById("videoPopup").classList.remove("hidden");
}
function function2() {
    // Show the Explore Now button
    document.getElementById("popupbutton").style.display = "inline-block";

    // Pause the video (optional)
    document.getElementById("introvideo").pause();

    // Hide the video popup
    document.getElementById("videoPopup").classList.add("hidden");
}


