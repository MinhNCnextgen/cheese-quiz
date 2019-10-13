console.log('js loaded');

let multiDataList = multiple_choice_data;

// get by id in url
let multiQuizId = parseInt(window.location.href.split('=')[1]);
let quizData = multiDataList.filter(value => value.id === multiQuizId)[0];
let subQuiz = quizData.subQuiz;

// get by index in list
// let quizData = multiDataList[7];
// let subQuiz = multiDataList[7].subQuiz;
let quizIndex = 0;
let count = 0;
let currentQuiz = subQuiz[quizIndex];

setQuizCount();
genQuiz(currentQuiz);
setIndicator();


// main flow


function resultDisplay(){
    let div = document.createElement("div");
    let span = document.createElement("span");
    let node = document.createTextNode("Xem kết quả");
    span.appendChild(node);
    div.appendChild(span)
    div.className = "resultDisplay"
    console.log(div);

    div.addEventListener('click', function(){
        let resultModal = document.getElementById('result-modal');
        resultModal.style.display = 'block';
    });

    let quizContainer = document.getElementById('quiz-content');
    quizContainer.appendChild(div);
    console.log(quizContainer);
    this.getResultList();
}



function choiceOnClick(event){
    // console.log(currentQuiz);
    let choise = event.currentTarget;
    let quizContent = document.getElementById('quiz-content');

    let current = quizContent.getElementsByClassName('active');
    console.log(count);

    if (current.length > 0) {

        current[0].className = current[0].className.replace(" active", "");
        choise.classList.add("active");

    } else {
        choise.classList.add("active");
        count++;
        console.log("count" + count);

        if (quizIndex + 1 == subQuiz.length) {
            resultDisplay()
        }

    }

    let answer = choise.getAttribute('value');
    console.log(answer);
    // console.log(typeof(answer));
    // if(answer == '0' || answer == '1' || answer == '2' || answer == '3'){

    // }
    // console.log(current.length);

    currentQuiz.answer = answer;

    // console.log(currentQuiz);
    // console.log(event.currentTarget);

    // next quiz
    setTimeout(function() {
        nextQuiz();

        setQuizCount();
        setIndicator();
    }, 300);
    // console.log(subQuiz);
}

function identOnClick(event) {
    console.log(event.currentTarget);
    let ident = event.currentTarget;
    let identId = ident.getAttribute('value');
    quizIndex = parseInt(identId);
    currentQuiz = subQuiz[quizIndex];

    genQuiz(currentQuiz);
    setQuizCount();
    setIndicator();
    
    if (quizIndex + 1 == subQuiz.length) {
        resultDisplay()
    }
}



// sub function

function genQuiz(quiz) {
    console.log('gen quiz');
    console.log(quiz);

    let quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h1 id='title'>${quiz.title}</h1>
        <div id='quiz-content' class="quiz-content">
            <img id='quiz-image'
                src=${quiz.image}
                alt="">
            <div class="quiz-choice" onclick="choiceOnClick(event)" value=0>
                <h3 class="option">A</h3>
                <p class='content'>${quiz.choices[0]}</p>
            </div>
            <div class="quiz-choice" onclick="choiceOnClick(event)" value=1>
                <h3 class="option" >B</h3>
                <p class='content'>${quiz.choices[1]}</p>
            </div>
            <div class="quiz-choice" onclick="choiceOnClick(event)" value=2>
                <h3 class="option">C</h3>
                <p class='content'>${quiz.choices[2]}</p>
            </div>
            <div class="quiz-choice" onclick="choiceOnClick(event)" value=3>
                <h3 class="option">D</h3>
                <p class='content'>${quiz.choices[3]}</p>
            </div>
           
        </div
    `
    if (subQuiz[subQuiz.length - 1].answer != '' && (quizIndex + 1) === subQuiz.length) {
        // quizContainer.insertAdjacentHTML('beforeend',`

        // `);
    }
}

function nextQuiz() {
    // console.log(quizIndex + 1)
    // console.log(subQuiz.length)
    if (quizIndex + 1 < subQuiz.length) {
        // console.log('gen quiz');
        quizIndex += 1;


        currentQuiz = subQuiz[quizIndex];
        genQuiz(currentQuiz);

    }

}

function setQuizCount() {
    let quizCount = document.getElementById('quiz-count');
    quizCount.innerHTML = `
        <p>${quizIndex + 1} / ${subQuiz.length}</p>
    `;

}

function setIndicator() {
    let indicator = document.getElementById('quiz-ident-container');
    indicator.innerHTML = '';
    for (let i = 0; i < subQuiz.length; i++) {
        if (i === quizIndex) {
            indicator.insertAdjacentHTML("beforeend", `
                <div class="quiz-ident current" onclick="identOnClick(event)" value=${i} ></div>
            `);
        } else {
            if (subQuiz[i].answer === '') {
                indicator.insertAdjacentHTML("beforeend", `
                    <div class="quiz-ident" value=${i}></div>
                `);
            } else {
                indicator.insertAdjacentHTML("beforeend", `
                    <div class="quiz-ident checked" onclick="identOnClick(event)" value=${i}></div>
                `);
            }
        }
    }
}

function modalButtonOnClick(){
    let resultModal = document.getElementById('result-modal');
    resultModal.style.display = 'none';
}

let aCount= 0;
let bCount= 0;
let cCount= 0;
let dCount= 0;
let result = '';

function getResultList(){
    let resultList = [];
    
    for(let i = 0; i < subQuiz.length; i++ ){
        resultList.push(subQuiz[i].answer);
    }

    for(let i=0; i< resultList.length; i++){
        if(resultList[i] === '0'){
            aCount +=1;
        }else if(resultList[i] === '1'){
            bCount +=1;
        }else if(resultList[i] === '2'){
            cCount +=1;
        }else if(resultList[i] === '3'){
            dCount +=1;
        }
    }

    console.log(aCount);
    console.log(bCount);
    console.log(cCount);
    console.log(dCount);

    if(aCount > bCount && aCount > cCount && aCount > dCount){
        result = quizData.result[0];
    }else if(bCount > aCount && bCount > cCount && bCount > dCount){
        result = quizData.result[1];
    }else if(cCount >aCount && cCount > bCount && cCount > dCount){
        result = quizData.result[2];
    }else if(dCount > aCount && dCount > bCount && dCount > cCount){
        result = quizData.result[3];
    }else{
        result = quizData.result[3];
    }

    console.log(result);
    document.getElementById('modal-title').innerHTML = result.title;
    document.getElementById('modal-description').innerHTML = result.description;

    console.log(resultList);
}