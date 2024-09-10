let greetUser = () => {
    let userName = prompt('Please Enter Your Name Here');
    let nameDOM = document.getElementById("name--section");
    let dateDOM = document.getElementById("date--section");
    let wrongDOM = document.getElementById("wrong--section");
    let mainDOM = document.querySelectorAll('main > *');

    if(userName != null){
        if(userName != ''){
            const now = new Date();

            const timeOptions = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            };

            const dayOptions = {
                weekday: 'long'
            };

            const time = now.toLocaleTimeString('tr-TR', timeOptions);
            const day = now.toLocaleDateString('tr-TR', dayOptions);

            let nameMsg = `<p>Merhaba, ${userName}! Hos Geldin!</p>`;
            let dateMsg = `<p>${time} ${day}</p>`;

            nameDOM.innerHTML = nameMsg;
            dateDOM.innerHTML = dateMsg;
        }else{
            let msg = `<p>You Should Not Enter Empty Name. Please Refresh The Page!</p>`
            toggleClasses(mainDOM, 'not-visible');
            wrongDOM.innerHTML = msg;
        }
    }else{
        let msg = `<p>You Closed The Prompt Screen, Please Refresh The Page And Try Again!</p>`;
        toggleClasses(mainDOM, 'not-visible');
        wrongDOM.innerHTML = msg;
    }
};

const toggleClasses = (section, className) => {
    for(let i = 0; i < section.length; i++){
        section[i].classList.toggle(className);
    }
};