// Selecting necessary HTML elements using their IDs
const Btn       = document.querySelector("#generateBtn");
const text      = document.querySelector("#shown_message");
const Uinp      = document.querySelector("#inputField");
const QRimg     = document.querySelector("#qrImage");
const result    = document.querySelector("#result");
const message   = document.querySelector("#message");
const download  = document.querySelector("#download");

// Function to remove animation from the message
function remAni() 
{
    // Removing the CSS animation from the message
    message.style.animation = "none";
}

// Function to generate the QR code
function generate() 
{

    // Checking if the user input is not empty
    if(Uinp.value != "") 
    {
        // Making the QR image visible
        QRimg.style.visibility = "visible"; 
        
        // If not empty, generate the QR code using the user input
        let genUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${Uinp.value}&amp;size=750x750;&ecc=H;&margin=20`;
        
        // Placing the hyperlinks and urls into their places.
        result.src = genUrl;
        download.href = `${genUrl}&download=1`;
    } 

    else 
    {
        // If empty, show the message with an animation
        message.style.animation = "show_message 2s ease-in-out";

        // Remove the animation after 2 seconds of showing it
        setTimeout(remAni, 2000);
    }

    // Prevent the form from submitting and causing a page refresh
    return false;
}

// Adding a click event listener to the button to generate the QR code
Btn.addEventListener("click", generate);
