// Selecting necessary HTML elements using their IDs
const Btn       = document.querySelector("#generateBtn");
const Uinp      = document.querySelector("#inputField");
const QRimg     = document.querySelector("#qrImage");
const result    = document.querySelector("#result");
const message   = document.querySelector("#message");
const text      = document.querySelector("#shown_message");

// Function to remove animation from the message
function remAni() 
{
    // Removing the CSS animation from the message
    message.style.animation = "none";
}

// Function to generate the QR code
function generate() 
{
    // Making the QR image visible
    QRimg.style.visibility = "visible"; 

    // Checking if the user input is not empty
    if(Uinp.value != "") 
    {
        // If not empty, generate the QR code using the user input
        result.src = `https://api.qrserver.com/v1/create-qr-code/?data=${Uinp.value}&amp;size=500x500;&ecc=H;&margin=18`;
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
