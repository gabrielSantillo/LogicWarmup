let tickes_sold = 700;
let venue_capacity = 1000;
let is_sold_out = false;
let is_repeat_show = false;

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

if (tickes_sold / venue_capacity === 0.9 || venue_capacity >= 60000) {
    console.log("Special case");
} else if (tickes_sold / venue_capacity === 0.7 || venue_capacity >= 90000) {
    console.log ("Special case");
} else if (is_sold_out === true && is_repeat_show === true) {
    console.log("Special case")
} else {
    console.log("Normal case")
}
 

let special_performer_1 = "Linkin Park";
let special_performer_2 = "Shrek";
let special_performer_3 = "Alex Bymoen";
let special_performer_4 = "1972 Miami Dolphins";
let special_performer_5 = "Metallica";

if (special_performer_1 === "Alex Bymoen" || special_performer_1 === "Shrek" || special_performer_1 === "1972 Miami Dolphins") {
    console.log("Lucky You!");
} else if (special_performer_2 === "Alex Bymoen" || special_performer_2 === "Shrek" || special_performer_2 === "1972 Miami Dolphins") {
    console.log("Lucky You!");
} else if (special_performer_3 === "Alex Bymoen" || special_performer_3 === "Shrek" || special_performer_3 === "1972 Miami Dolphins") {
    console.log("Lucky You!");
} else if (special_performer_4 === "Alex Bymoen" || special_performer_4 === "Shrek" || special_performer_4 === "1972 Miami Dolphins") {
    console.log("Lucky You!");
} else if (special_performer_5 === "Alex Bymoen" || special_performer_5 === "Shrek" || special_performer_5 === "1972 Miami Dolphins") {
    console.log("Lucky You!");
} else {
    console.log("Do nothing");
}