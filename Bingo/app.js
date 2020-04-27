const subbtn = document.getElementById('input-button');
const genbtn = document.getElementById('generate-button');
const hostbtn = document.getElementById('host-button');
const anchorgen = document.getElementById('word-generator');
const inpwords = document.getElementById('input-words');
const cmts = document.getElementById('comments');
const arrport = document.getElementById('tbldisp');
const luck = document.getElementById('luck')
const hostdiv = document.getElementById('hosts');
var temp = new Array();
var displayList =[]
var displayCopy =[]
const pending = document.getElementById('remaining-words');
const gennum = document.getElementById('word-generator');
let ticketDiv=document.querySelector('.ticket-div-row');


function countvalidator(input){
    temp = input.value.split(",")
    displayCopy =[...temp];
    console.log(temp.length);
    return temp.length 
}


function createTable(ticket) {

    let coldiv=document.createElement('div')
    coldiv.setAttribute('class', 'col');
    //generate html ticket containing 9 words
    let ticketHTML='';
    ticketHTML=`
                <div class="ticket-box mb-5">
                            <label>${ticketid++}</label>
                            <div class="row1 d-flex">
                                <div class="words">${ticket[0]}</div>
                                <div class="words">${ticket[1]}</div>
                                <div class="words">${ticket[2]}</div>
                            </div>
                            <div class="row1 d-flex">
                                <div class="words">${ticket[3]}</div>
                                <div class="words">${ticket[4]}</div>
                                <div class="words">${ticket[5]}</div>
                            </div>
                            <div class="row1 d-flex">
                                <div class="words">${ticket[6]}</div>
                                <div class="words">${ticket[7]}</div>
                                <div class="words">${ticket[8]}</div>
                            </div>
                            
                          
                        </div>
    
    `


    coldiv.innerHTML+=ticketHTML;
    ticketDiv.appendChild(coldiv)



  }
  
function generateTicket(arr){
    let arr1 = arr.value.split(",")
    console.log(arr1)
    const getRandomItem = function(arr1) {
        return arr1[Math.floor(Math.random() * arr1.length)];
    }
    let n = 9;
    let count = 0;
    // new array to push random item in
    let randomItems = []
    do {
        let item = getRandomItem(arr1);
        console.log(item);
        randomItems.push(item);
        // update the original array and remove the recently pushed item
        arr1.splice(arr1.indexOf(item), 1);
        count++;

    } while(count < n);
    console.log(randomItems)
    return randomItems;
}


hostbtn.addEventListener('click',e=>{
        hostdiv.style.display = "block"
        
})

gennum.addEventListener('click',e =>{
    const getNextEle = function(arr1) {
        return arr1[Math.floor(Math.random() * arr1.length)];
    }
    let ele = getNextEle(displayCopy);
    console.log(displayCopy)
    console.log(ele)
    displayList.push(ele);
    console.log(displayList)
    displayCopy.pop(ele); 
    pending.innerText = displayCopy.length + "Words Remaining";
    console.log(ele)
    document.querySelector('.bingo-word').innerText = ele;
    //document.getElementById('ele-disp').innerText = ;
})




genbtn.addEventListener('click',e=>{
    hostbtn.style.display = "flex"
    var arrList = new Array();
    ticketDiv.innerHTML='';
    ticketid=1;
    for(var i=0;i<50;i++){
        arrList = generateTicket(inpwords);
        createTable(arrList);
    }
})



subbtn.addEventListener('click', e =>{
    let res = countvalidator(inpwords) 
    if(res>8){
        cmts.innerText = res + "Words are entered"
        genbtn.style.display="flex"
        
    }
    else{
        cmts.innerText = "Only "+res+ "words are entered Please enter more"
    }
   
})