let tickes_sold = 1000;
let venue_capacity = 2000;
let is_sold_out = false;

if (is_sold_out === true) {
    console.log("All sold out.");
} else {
    console.log("Tickets Still Available.");
}

if (tickes_sold / venue_capacity >= 0.9) {
    console.log("Almost Sold Out.");
} else if (tickes_sold / venue_capacity >= 0.5) {
    console.log("Tickes Selling Fast");
} else {
    console.log("Tickes on sale now");
}

if (tickes_sold > venue_capacity) {
    console.log("SYSTEM ERROR");
} else if (tickes_sold == venue_capacity && is_sold_out == false) {
    console.log("SYSTEM ERROR");
} else {
    console.log("All good.")
}