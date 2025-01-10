function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive
  }
  
  function checkProbabilityTheory(count) {
   
    let evenCount = 0;
    let oddCount = 0;
  
    for (let i = 0; i < count; i++) {
      const randomNumber = getRandomInt(100, 1000);
      if (randomNumber % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    const evenPercent = (evenCount / count) * 100;
    const oddPercent = (oddCount / count) * 100;
  
    console.log(`Total generated numbers: ${count}`);
    console.log(`Even numbers: ${evenCount}`);
    console.log(`Odd numbers: ${oddCount}`);
    console.log(`Percent of even numbers: ${evenPercent.toFixed(2)}%`);
    console.log(`Percent of odd numbers: ${oddPercent.toFixed(2)}%`);
  }
  

  checkProbabilityTheory(50);