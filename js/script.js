class MShift {
    MentorName;
    MentorShifts = [];
}

let ShiftMentorList = [];
let x=0


window.onloadstart= function () {
   
    initializeShifts();

    bindMentorsToDropDown();
}   




function initializeShifts() {
    
    let la1 = new MShift();
    la1.MentorName = "Mentor1";
    la1.MentorShifts = ["shift1", "shift2", "shift3"];
     
    ShiftMentorList[0] = la1;
    
    let la2 = new MShift();
    la2.MentorName = "Mentor2";
    la2.MentorShifts = ["shift1", "shift2"];

    ShiftMentorList[1] = la2;

    let la3 = new MShift();
    la3.MentorName = "Mentor3";
    la3.MentorShifts = ["shift1", "shift2", "shift3", "shift4", "shift5"];

    ShiftMentorList[2] = la3;

    let la4 = new MShift();
    la4.MentorName = "Mentor4";
    la4.MentorShifts = ["shift1", "shift2", "shift3", "shift4", "shift5"];

    ShiftMentorList[3] = la4;

    let la5 = new MShift();
    la5.MentorName = "Mentor5";
    la5.MentorShifts = ["shift1", "shift2", "shift3", "shift4"];

    ShiftMentorList[4] = la5;

    let la6 = new MShift();
    la6.MentorName = "Mentor6";
    la6.MentorShifts = ["shift1", "shift2", "shift3", "shift4"];

    ShiftMentorList[5] = la6;
}

function bindMentorsToDropDown() {
    
    let dropDown = document.getElementById("ments");

    dropDown.options.length = 0;

    let el = document.createElement("option");
    el.textContent = "Select a mentor...";
    dropDown.appendChild(el);
 
    for (let i = 0; i < ShiftMentorList.length; i++) {
        let la = ShiftMentorList[i];
        let el = document.createElement("option");
        el.textContent = la.MentorName;
        el.value = la.MentorName;
        dropDown.appendChild(el);
    }
}

function loadShift() {
    
    let dropDown = document.getElementById("ments").value;
    
    let la = findShiftByMentor(dropDown);

    if (la != undefined) {

        let dropDown2 = document.getElementById("shifts");
        dropDown2.options.length = 0;

        let el = document.createElement("option");
        el.textContent = "Select a shift...";
        dropDown2.appendChild(el);

        for (let i = 0; i < la.MentorShifts.length; i++) {
            let el = document.createElement("option");
            el.textContent = la.MentorShifts[i];
            el.value = la.MentorShifts[i];
            dropDown2.appendChild(el);
        }  
    }
}

function findShiftByMentor(name) {
    for (let i = 0; i < ShiftMentorList.length; i ++) {
        if (ShiftMentorList[i]["MentorName"] === name) {
            return ShiftMentorList[i];
        }
    }
    return undefined;
}

function myFunction2(){
    var navbar1 = document.getElementById('navb');
    navbar1.classList.toggle('show');
}

function getFName(form){
    return form[2].value;
}

function getLName(form){
    return form[3].value;
}

function getEmail(form){
    return form[5].value;
}

function ValidateEmail(mail) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    
    return mail.match(mailformat);
}

function myFun(form){
   let fname= "";
   let lname= ""; 
   let email= "";
   fname = getFName(form);
   lname=  getLName(form);
   email= getEmail(form);
  
   const c1 = "Thank you " ;
   const c2 = " for your appointment.";
   
   let correctmail = ValidateEmail(email);

   if(correctmail){
        let message = c1 + fname + " " + lname + c2;
        document.getElementById("thanks").innerHTML = message;
    }
    else {  
        document.getElementById("thanks").innerHTML = "Please correct your email";
    }
}

