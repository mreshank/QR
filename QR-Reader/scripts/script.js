// Selecting necessary HTML elements using their IDs
const Btn       = document.querySelector("#generateBtn");
const copy      = document.querySelector("#copy");
const Uinp      = document.querySelector("#inputField");
const QRres     = document.querySelector("#qrResult");
const result    = document.querySelector("#result");
const message   = document.querySelector("#message");
const msg_text  = document.querySelector("#shown_message");

let text = "No File Selected Yet!";

function remAni() 
{
    message.style.animation = "none";
}

function generate() 
{

    // Checking if the user input is not empty
    if(Uinp.files && Uinp.files.length > 0) 
    {
        QRres.style.visibility = "visible"; 
        
        let obj = `http(s)://api.qrserver.com/v1/read-qr-code/?fileurl=http%3A%2F%2Fapi.qrserver.com%2Fv1%2Fcreate-qr-code%2F%3Fdata%3DHelloWorld`;
        console.log(obj);
        text = ". . .";
        
        result.value = text;
    } 

    else 
    {
        msg_text.value = "⚠️ No File Selected Yet!";

        message.style.animation = "show_message 2.25s ease-in-out";

        setTimeout(remAni, 2100);
    }

    return false;
}

Btn.addEventListener("click", generate);

function copyToClip() 
{
    result.select();

    document.execCommand("copy");

    msg_text.value = "Copied to Clipboard!";

    message.style.animation = "show_message 2.25s ease-in-out";
    
    setTimeout(remAni, 2100);

    return false;
}

copy.addEventListener("click", copyToClip);
