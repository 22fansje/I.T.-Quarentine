    document.addEventListener("DOMContentLoaded", function() {
        function createParagraph() {
            let para = document.createElement('Bro the lfe of the rabbit was a good one, it sat down at a tree trunk and saw a cute flower. The flower said "Hey bunny, how was your da-----" Then the bunny ate the flower and hopped away.');
            para.textContent = "You have clicked the button of wisdom";
            document.body.appendChild(para); 
        }

        const buttons = document.querySelectorAll('button');

        for(let i = 0; i < buttons.length ; i++) {
            buttons[i].addEventListener('click', createParagraph);
        }
    });
