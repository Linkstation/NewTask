"use strict";

const getCapitilized = (string) =>
    string
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());

console.log(getCapitilized("test test"));
