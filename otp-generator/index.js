


let generatedOTP;


const otpExpireElem = document.getElementById("otp-expire-id");

function expireOTP() {

  const totalTime = 15000;
  const interval = 1000;

  let slice = totalTime / interval;

  const intervalId = setInterval(() => {
    otpExpireElem.innerText = `OTP will expire in ${slice} seconds`
    slice = slice -1;
  }, interval)
  
  setTimeout(() => {
    otpExpireElem.innerText = `OTP Expiree`;
    clearInterval(intervalId);
    generateOTP()
  }, totalTime);
  

}

function tackleOTPBoxs() {
  const boxes = document.getElementById("otp-box-list-id");
  boxes.addEventListener("input", (e) => {
    const target = e.target;
    const value = target.value;

    if (isNaN(value)) {
      target.value = ""
      return
    }

    const nextElement = target.nextElementSibling;

    if (nextElement) {
      nextElement.focus()
    }
    validateOTP();


  })
}


function generateOTP() {
   generatedOTP = Math.floor(Math.random() * 9000 + 1000);
   const otpElem = document.getElementById("geenarated-otp-id");

  otpElem.innerText = `Your OTP : ${generatedOTP}`;

  expireOTP();

}

function validateOTP() {
  let typeNumber = "";
  const boxlistElem = document.getElementById("otp-box-list-id");
  [...boxlistElem.children].forEach((elem) => {
    typeNumber += elem.value
  });

  console.log(generatedOTP, typeNumber);
  const result = (generatedOTP === parseInt(typeNumber, 10))
  const resultElem = document.getElementById("result-id");

  if (result) {
    resultElem.innerText = "OTP has been validate successfully"
    resultElem.classList.remove("fail")
    resultElem.classList.add("success")
  } else {
    resultElem.innerText = "OTP is Invalidate"
    resultElem.classList.remove("success")
    resultElem.classList.add("fail")
    
  }
}



function init() {
  console.log("javascitp initialization done!!!")
  tackleOTPBoxs()
  setTimeout(generateOTP, 2000);
  
}

init()