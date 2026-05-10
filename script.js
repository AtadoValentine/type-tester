let timeLeft = 50
let intervalId = null

document.querySelector('.js-start-button')
.addEventListener('click', () => {
if(!intervalId){

intervalId = setInterval(() => {
timeLeft --;
const formatted =  `Time Left: ${timeLeft.toString().padStart(0, "0")} secs`

document.querySelector('.js-timer-display').innerText = formatted

if(timeLeft <= 0){
clearInterval(intervalId)
intervalId = null
document.querySelector('.js-timer-display').innerText = 'Good Job !'
alert('Time Up !')
calculateResult()
}

}, 1000)
};

const mySentences = [
    'Success in life is not determined by how fast you start the race, but by how consistently you keep moving forward even when the road becomes difficult and the challengies seem endless; thus making you outstanding and firm in your day-to-day dealings with others.',
    'The internet has completely transformed how we learn, communicate, and work, yet many people still fail to take full advantage of the opportunities that lies right in front of them every single day',
    'When you discipline your mind to focus on growth instead of fear, you will begin to see doors open that once seemed permanently closed, and people will be drawn to your positive energy.',
    'True friendship is not measured by how often you see someone, but by the depth of understanding, loyalty, and trust that remains unbroken even during long periods of silence.',
    'Technology is advancing at such an incredible speed that skills which are available today may become completely irrelevant tomorrow, making lifelong learning more important than ever.',
    'A person who refuses to make mistakes also refuses to learn, because the lessons that stick most strongly in our memory usually come from the time we failed the hardest.',
    'While money can buy comfort and luxury, it cannot purchase peace of mind, good health, or genuine love, which are often the true treasures of human existence.',
    'The most powerful leaders are not those who shout the loudest or demand obedience, but those who inspire others through their humility, integrity, and unshakeable vision.',
    'Every time we delay a task out of laziness or fear, you are not only wasting precious hours but also silently teaching yourself to accept mediocrity instead of striving for excellence.',
    'Life will never hand you the perfect moment to start, so waiting endlessly for the right condition is simply another way of saying you are too afraid to try.'
]

const randomSentence = mySentences[Math.floor(Math.random()*mySentences.length)]
const mySentence = mySentences[randomSentence]
const sentenceDisplay = document.querySelector('.js-sentence-display')

function calculateResult (){
 const typeArea = document.querySelector('.js-type-area')
typeArea.disabled = true;
 let typedText = typeArea.value.trim();
 let originalSentence = sentenceDisplay.textContent;

 let wordsTyped = typedText === "" ? 0 : typedText.split(/\st/).length;
 let timeInMinutes = 5 /60;
 let wpm = Math.round(wordsTyped / timeInMinutes);

 let correctChars = 0;
 for(let i = 0; i < typedText.length; i ++){
    if(typedText[i] === originalSentence[i]) correctChars ++
 }
 let accuracy = Math.round((correctChars / originalSentence.length) * 100);
   const name = document.querySelector('.js-name').value

   let remark = ''
   if(accuracy >= 90){
    remark = 'Excellent Performance'
   }
   else if (accuracy >= 80 && remark < 90 ){
    remark = 'Great Performance'
   }
    else if ( accuracy >= 60 && remark < 80){
    remark = 'Good performance, Try Harder'
   }
    else if (accuracy >= 45 && remark < 60 ){
    remark = 'Poor performance, work harder'
   }
   else{
    remark = 'Failed !'
   }
  
 document.querySelector('.js-time-used').innerText = `TIME SPENT: 50 secs`
  document.querySelector('.js-wpm').innerText = `WPM: ${wpm}w/m`
   document.querySelector('.js-accuracy').innerText = `ACCURACY: ${accuracy}%`
    document.querySelector('.js-results').innerText = `Dear ${name}, your TST results:`
     document.querySelector('.js-remark').innerText = `REMARK: ${remark}`
}

sentenceDisplay.innerHTML = randomSentence
.split("")
.map(char => `<span>${char}</span>`)
.join("");

document.querySelector('.js-type-the-sen').innerText = 'TYPE THE SENTENCE BELOW'
document.querySelector('.js-type-area-container').innerHTML = `<textarea rows="10" cols="70" placeholder="Type here" class="type-area js-type-area"></textarea>`

let targetSentence = mySentence;
 let typingBox = document.querySelector('.js-type-area')

 typingBox.addEventListener('input', () => {
   const sentenceSpans = 
   sentenceDisplay.querySelectorAll("span");
   const typedText = typingBox.value.split("");

   sentenceSpans.forEach((span, index) => {
    const typedChar = typedText[index];

    if(typedChar == null){
        span.classList.remove("correct", "incorrect");
    }
    else if(typedChar === span.textContent){
        span.classList.add("correct");
        span.classList.remove("incorrect");
    }
    else {
        span.classList.add("incorrect");
        span.classList.remove("correct");
    }
   })
 })
});

document.querySelector('.js-enter')
.addEventListener('click', () => {
  const name = document.querySelector('.js-name').value
  alert(`Welcome dear ${name}`)


})

document.querySelector('.js-restart-button')
.addEventListener('click', () => {
    clearInterval(intervalId)
    intervalId = null
    timeLeft = 50
    document.querySelector('.js-timer-display').innerText = 'Time Left: 50 secs'
    const typeArea = document.querySelector('.js-type-area')
typeArea.disabled = false;
typeArea.value = '';
typeArea.focus();
})
