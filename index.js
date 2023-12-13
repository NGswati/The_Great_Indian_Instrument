var numberOfinsButtons = document.querySelectorAll(".ins").length;
alert("For Better Expirence window size should be greater than 10inch x 10inch.")

var pressedCount = 0;

for (var i = 0; i < numberOfinsButtons; i++) {

  document.querySelectorAll(".ins")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    
    if (pressedCount > 7) {
      var randomColor = getRandomColor();
      var buttons = document.querySelectorAll('.ins');
      buttons.forEach(function(button) {
        button.style.backgroundColor = randomColor;
      });
      document.querySelector('#title').style.backgroundColor= randomColor;
      document.body.style.backgroundColor = randomColor;
      
    }
    makeSound(buttonInnerHTML,function(key, audioDuration){
      buttonAnimation(key,audioDuration);
    });
  });

}

document.addEventListener("keypress", function(event) {
  if (pressedCount > 7) {
    var randomColor = getRandomColor();
    var buttons = document.querySelectorAll('.ins');
    buttons.forEach(function(button) {
      button.style.backgroundColor = randomColor;
    });
    document.querySelector('#title').style.backgroundColor= randomColor;
    document.body.style.backgroundColor = randomColor;
    
  }
  makeSound(event.key, function(key, audioDuration) {
    buttonAnimation(key, audioDuration);
  });
});

var playingAudios = [];

function makeSound(key,callback) {

  switch (key) {
    case "c":
      stopAllAudio();
      break;

    case "a":
      var a1 = new Audio("sounds/Adholki.mp3");
      a1.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a1.duration * 1000);
        a1.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a1);
      break;

    case "b":
      var a2 = new Audio("sounds/bansuri.mp3");
      a2.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a2.duration * 1000);
        a2.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a2);
      break;

    case "d":
      var a3 = new Audio("sounds/Dholak.mp3");
      a3.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a3.duration * 1000);
        a3.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a3);
      break;

    case "h":
      var a4 = new Audio("sounds/harmonium.mp3");
      a4.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a4.duration * 1000);
        a4.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a4);
      break;

    case "j":
      var a5 = new Audio("sounds/jhanjkartal.mp3");
      a5.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a5.duration * 1000);
        a5.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a5);
      break;

    case "k":
      var a6 = new Audio("sounds/Ksantoor.mp3");
      a6.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a6.duration * 1000);
        a6.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a6);
      break;

    case "l":
      var a7 = new Audio('sounds/Lsarangi.mp3');
      a7.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a7.duration * 1000);
        a7.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a7);
      break;

    case "m":
      var a8 = new Audio('sounds/mridangam.mp3');
      a8.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a8.duration * 1000);
        a8.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a8);
      break;

    case "n":
      var a9 = new Audio('sounds/Nsarod.mp3');
      playingAudios.push(a9);
      a9.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a9.duration * 1000);
        a9.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      
      break;

    case "o":
      var a10 = new Audio('sounds/Osaxophone.mp3');
      a10.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a10.duration * 1000);
        a10.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a10);
      break;

    case "p":
      var a11 = new Audio('sounds/PShehnai.mp3');
      a11.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a11.duration * 1000);
        a11.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a11);
      break;

    case "q":
      var a12 = new Audio('sounds/QshrutiBox.mp3');
      a12.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a12.duration * 1000);
        a12.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a12);
      break;

    case "r":
      var a13 = new Audio('sounds/Rsitar.mp3');
      a13.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a13.duration * 1000);
        a13.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a13);
      break;

    case "s":
      var a14 = new Audio('sounds/Swarmandal.mp3');
      a14.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a14.duration * 1000);
        a14.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a14);
      break;

    case "t":
      var a15 = new Audio('sounds/tanpura.mp3');
      a15.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a15.duration * 1000);
        a15.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a15);
      break;

    case "v":
      var a16 = new Audio('sounds/veena.mp3');
      a16.addEventListener('loadedmetadata', function() {
        var audioDuration = Math.floor(a16.duration * 1000);
        a16.play();
        if (callback && typeof callback === 'function') {
          callback(key, audioDuration);
        }
      });
      playingAudios.push(a16);
      break;

    default: console.log(key);

  }
  
}


function buttonAnimation(currentKey,time) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  pressedCount++;
  setTimeout(function() {
    activeButton.classList.remove("pressed");
    pressedCount--;
  }, time);

}

function stopAllAudio() {
  playingAudios.forEach(function(audio) {
    audio.pause();
    audio.currentTime = 0; 
  });

  playingAudios = [];

  var buttons = document.querySelectorAll('.ins');
  buttons.forEach(function(button) {
    button.classList.remove('pressed');
    pressedCount = 0
  });
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}