// document.getElementById('generate-btn').addEventListener('click', function () {
//     let random = Math.round(Math.random() * 10000);
//     let update = random + "";
//     if (update.length == 4) {
//         document.getElementById('generate-input').value = random;
//     }
// })
function generateBtn(){
    let random = Math.round(Math.random() * 10000);
    let update = random + "";
    if (update.length == 4) {
        // document.getElementById('generate-input').value = random;
        return random;
    }
    else{
        // console.log("Don't matched ! Calling again baby",random);
        return generateBtn();   
    }
}
function catchGenerateBtn(){
    let result = generateBtn();
    document.getElementById('generate-input').value = result;
}

// document.getElementById('key-pad').addEventListener('click', function (event) {
//     let num = event.target.innerText;
//     let calInput = document.getElementById('type-input');
//     if (isNaN(num)) {
//         if (num == 'C') {
//             calInput.value = '';
//         }
//     }
//     else {
//         let previousNum = calInput.value;
//         let newNum = previousNum + num;
//         calInput.value = newNum;
//     }
// })
function keyPad(event){
    let num = event.target.innerText;
    let calInput = document.getElementById('type-input');
    if (isNaN(num)) {
        if (num == 'C') {
            calInput.value = '';
        }
    }
    else {
        let previousNum = calInput.value;
        let newNum = previousNum + num;
        calInput.value = newNum;
    }
}

// document.getElementById('submitBtn').addEventListener('click', function(){
//     let generateInput = document.getElementById('generate-input').value;
//     let typeInput = document.getElementById('type-input').value;
//     let notifySuccess = document.getElementById('notify-success');
//     let notifyFail = document.getElementById('notify-fail');
//     if (generateInput == typeInput) {
//         notifySuccess.style.display= 'block';
//         notifyFail.style.display= 'none';
//     }
//     else{
//         notifyFail.style.display= 'block';
//         notifySuccess.style.display= 'none';
//     }
// })
function notityMe() {
    let generateInput = document.getElementById('generate-input').value;
    let typeInput = document.getElementById('type-input').value;
    let notifySuccess = document.getElementById('notify-success');
    let notifyFail = document.getElementById('notify-fail');
    if (generateInput == typeInput) {
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    }
    else {
        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
}

// document.getElementById('cross').addEventListener('click', function(){
//     let typeInput = document.getElementById('type-input').value;
//     let deleteLastDigit = Math.floor(typeInput/10);
//     if (deleteLastDigit > 0) {
//         document.getElementById('type-input').value = deleteLastDigit;
//     }else{
//         document.getElementById('type-input').value= "";
//     }
// })
function deleteSingleNumber() {
    let typeInput = document.getElementById('type-input').value;
    let deleteLastDigit = Math.floor(typeInput / 10);
    if (deleteLastDigit > 0) {
        document.getElementById('type-input').value = deleteLastDigit;
    } else {
        document.getElementById('type-input').value = "";
    }
}