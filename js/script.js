let messageContainer = document.getElementById("messageContainer");
let errorMsg = document.getElementById("errorMsg");
let userInput = document.getElementById("userInput");
let sendBtn = document.getElementById("sendBtn");

sendBtn.onclick = function(){
    let userValue = userInput.value;
    
    if(userValue !== ""){
        userInput.value = "";
        errorMsg.textContent = "";
        let para = document.createElement("p");
        para.classList.add("text-right","mb-4");
        messageContainer.appendChild(para);
        
        let messageCont = document.createElement("span");
        messageCont.classList.add("msg-bg");
        messageCont.textContent = userValue;
        para.appendChild(messageCont);
    }
    else{
        errorMsg.textContent = "Please enter valid input";
    }
};

function getMsg(event){
    if (event.key === "Enter"){
        let userValue = userInput.value;
        if(userValue !== ""){
            userInput.value = "";
            errorMsg.textContent = "";
            let para = document.createElement("p");
            para.classList.add("text-right","mb-4");
            messageContainer.appendChild(para);
            
            let messageCont = document.createElement("span");
            messageCont.classList.add("msg-bg");
            messageCont.textContent = userValue;
            para.appendChild(messageCont);
        }
        else{
            errorMsg.textContent = "Please enter valid input";
        }
    }
}

userInput.addEventListener("keydown", getMsg);