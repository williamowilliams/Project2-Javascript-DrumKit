//If Keycap is hit, play sound based on the key cap

const playSound = (key) => {
    //Using ES6 template literals with the arguements keyCode object value to select the audio attribute for the key that is hit
    //This also shows the Object that is return to the Console and the key:value pair "keyCode" that we will need to access in a seperate function
    const audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
    const keyPress = document.getElementsByTagName(`div[data-key"${key.keyCode}"]`);

    if(!audio) return; //End the function if there is no audio

    audio.play();
    console.log(key.keyCode);
}


window.addEventListener('keydown', playSound);

//Below JS is used to make sure Console can see the keys being pressed.
