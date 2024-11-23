const popFacts = [
    "Michael Jackson's 'Thriller' remains the best-selling album of all time.",
    "Madonna is the best-selling female recording artist of all time.",
    "The term 'pop music' originated in the 1950s to describe music with wide appeal.",
    "ABBA's 'Dancing Queen' was performed at a concert celebrating the marriage of Sweden's King Carl XVI Gustaf.",
    "Taylor Swift wrote her first song, 'Lucky You', when she was 12 years old.",
    "The Beatles hold the record for most number-one hits on the Billboard Hot 100.",
    "Rihanna's 'Umbrella' was originally written for Mary J. Blige.",
    "Lady Gaga's real name is Stefani Joanne Angelina Germanotta.",
    "Ed Sheeran's '÷' (Divide) tour is the highest-grossing tour of all time.",
    "The Spice Girls' debut single 'Wannabe' reached number one in 37 countries."
];

const factDisplay = document.getElementById('fact-display');
const newFactBtn = document.getElementById('new-fact-btn');
const shareBtn = document.getElementById('share-btn');

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * popFacts.length);
    factDisplay.textContent = popFacts[randomIndex];
}

function shareFact() {
    if (navigator.share) {
        navigator.share({
            title: 'Pop Music Fun Fact',
            text: factDisplay.textContent,
            url: window.location.href
        })
        .catch(console.error);
    } else {
        // Fallback for browsers that don't support Web Share API
        alert('Copy this fact: ' + factDisplay.textContent);
    }
}

// Event listeners
newFactBtn.addEventListener('click', getRandomFact);
shareBtn.addEventListener('click', shareFact);

// Show initial fact when page loads
getRandomFact();

