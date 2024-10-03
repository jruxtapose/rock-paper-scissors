/**
 * Tests the randomness of the getComputerChoice() function by calling it 
 * a specified number of times and logging the distribution of choices.
 *
 * @param {number} totalIterations - The number of times to call getComputerChoice().
 */

function testComputer(totalIterations){
    // Initialize an object to store the counts for each choice 
    const results = { 
        rock: 0,
        paper: 0,
        scissors: 0,
        error: 0
    };

    // Call getComputerChoise() the specified number of times
    for(let i = 0; i < totalIterations; i++){
        const computerChoice = getComputerChoice();

        // Increment the count for the chosen option, or increment the error count if the choice is invalid.
        if (results.hasOwnProperty(computerChoice)) {
            results[computerChoice]++;
        } else {
            results.error++;
        }
    }

    // Calculate and log the percentage districution of each choice
    for (const choice in results) {
        const percentage = (results[choice] / totalIterations * 100).toFixed(2);
        console.log(`Chose ${choice}: ${results[choice]} (${percentage}%)`);
    }
}