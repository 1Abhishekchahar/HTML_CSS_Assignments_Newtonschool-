var count = 0; // Initialize a counter variable
$("#box").on("mouseover", function() {
    count++; // Increment the counter on each mouseover
    if (count % 2 === 1) { // Check if the count is odd
        $(this).css("transform", "rotate(180deg)"); // Rotate by 180 degrees in the clockwise direction
    } else {
        $(this).css("transform", "rotate(0deg)"); // Rotate back to original state on even mouseover
    }
});