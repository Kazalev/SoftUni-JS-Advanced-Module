function solve() {

  let correctAnswers = 0;
  let tempIndex = 0;

  Array.from(document
    .querySelectorAll('.quiz-answer'))  //Array.from === [...document---];
    .map(x => x.addEventListener('click', function nextQuestion(e) {

      if(e.target.innerText === 'onclick'
      || e.target.innerText === 'JSON.stringify()'
      || e.target.innerText === 'A programming API for HTML and XML documents'){
        correctAnswers++;
      }

      let currentSection = document.querySelectorAll('section')[tempIndex];
      currentSection.style.display = 'none';
      currentSection.classList.add('hidden');

      let nextSection = document.querySelectorAll('section')[tempIndex + 1];

      if (nextSection){
        nextSection.classList.remove('hidden');
      } else {
        showResult(correctAnswers);
      }

      nextSection.style.display = 'block';
      tempIndex++;
    }));

    function showResult(correctAnswers){
      document.querySelector('#results').style.display = 'block';

      if(correctAnswers === 3){
        document.querySelector('#results > li > h1').innerText = 'You are recognized as top JavaScript fan!';
      } else {
        document.querySelector('#results > li > h1').innerText = `You have ${correctAnswers} right answers`;
      }
    }
}