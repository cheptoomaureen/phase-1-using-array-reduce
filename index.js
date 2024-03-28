const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// Calculate the total number of assembled batteries using reduce()
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Total batteries:", totalBatteries);

