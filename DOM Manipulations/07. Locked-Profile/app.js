// function lockedProfile() {

//     let btn1 = document.querySelector("#main > div:nth-child(1) > button");
//     const hiddenDiv1 = document.querySelector("#user1HiddenFields");
//     const lock1 = document.querySelector("#main > div:nth-child(1) > input[type=radio]:nth-child(3)");
//     const unlock1 = document.querySelector("#main > div:nth-child(1) > input[type=radio]:nth-child(5)");


//     lock1.addEventListener('click', function(e){
//         console.log(e.target.value);

//         if(e.target.value === 'lock'){
//             btn1.disabled = true;
//         } else {
//             btn1.addEventListener('click', extendContent);
//         }
//     });

//     unlock1.addEventListener('click', function(e){
//         console.log(e.target.value);

//         if(e.target.value === 'unlock'){
//             btn1.disabled = false;
//             btn1.addEventListener('click', extendContent);
//         }
//     });
    
//     function extendContent(){
//         if(btn1.textContent === 'Show more'){
//             btn1.textContent = 'Hide it';
//             hiddenDiv1.style.display = 'block';
//         } else {
//             btn1.textContent = 'Show more';
//             hiddenDiv1.style.display = 'none';
//         }
//     }
// }

function lockedProfile() {
    const handler = e => {
      const isUnlocked = Array.from(e.target.parentElement.getElementsByTagName('input'))[1].checked === true;
      if (isUnlocked) {
        let a = Array.from(e.target.parentElement.getElementsByTagName('div'))[0].style;
        if (a.display === '') {
          a.display = 'block';
          e.target.textContent = 'Hide it';
        } else {
          a.display = '';
          e.target.textContent = 'Show more';
        }
      }
    };
    Array.from(document.getElementsByTagName('button')).map(e => e.addEventListener('click', handler));
  }