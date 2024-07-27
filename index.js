const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0); // Initial value for the accumulator is 0
  
  console.log(totalBatteries);