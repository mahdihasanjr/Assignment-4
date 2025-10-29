

// 1;
function calculateTax(income, expenses){
    if(income <0 || expenses <0 ||expenses >income){
        return "Invalid Input"
    }
        const profit = income - expenses;
        const tax = profit * 0.20;
        return tax;
}
const income = 80000;
const expenses =  25000;
const total = calculateTax(income,expenses);
// console.log(total);



// 2;
function sendNotification(email){
    if(email.includes('@') === false){
        return "Invalid Email"
    }
    // const notification = email.split('@').join(' send you an email from ');
    const parts = email.split('@');
    const username = parts[0];
    const domain = parts[1];
    const notification = username.concat(' send you an email from ',domain);
    // const notification = `${username} send you an email from ${domain}`;
    return notification;
}

const email = sendNotification('hmmahdihasan5000@gmail.com');
// console.log(email);


// 3;
function checkDigitsInNumber(str){
    if(typeof str !== 'string'){
        return "Invalid Input"
    }
    
    for(const string of str){
        if(string >= '0' && string <= '9'){
            return true;
        }
    }
    return false;
}
const str = checkDigitsInNumber('Mahdi201');
// console.log(str);


// 4;
function calculateFinalScore(obj){
    if(typeof obj !== 'object'){
        return "Invalid Input"
    }

    let total = obj.testScore + obj.schoolScore;
    if(obj.isFFamily === true){
        total += 20;

    }
    if(total >=80){
        return "vorti confirm"
    }
    else{
        return "tor matha"
    }
  
}


const obj = {
    name:'Rajib',
    testScore:50,
    schoolScore: 30,
    isFFamily: true
}
const finalScore = calculateFinalScore(obj);
// console.log(finalScore);



// 5;
function waitingTime(waitingTimes,serialNumber){
    let sum = 0;
    for(const waitingTime of waitingTimes){
        sum += waitingTime;
    }
    const avg = Math.round(sum / waitingTimes.length);
    const leftSerial = (serialNumber - waitingTimes.length) - 1;
    const interviewTime = avg * leftSerial;
    return interviewTime;
    

    
}
const interview = [5,9,3,4,8];
const serial = 10;
const totalTime= waitingTime(interview, serial);
console.log(totalTime)