var canvas = document.getElementById('lookatme');
var ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 150;

ctx.fillStyle = "red";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var video = document.getElementById('video');

var videoarr = document.getElementsByTagName('VIDEO')
console.log(videoarr)

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        for (let i = 0; i < videoarr.length; i++) {
            videoarr[i].srcObject = stream;
            videoarr[i].play();            
        }

        // video.srcObject = stream;
        // video.play();

    });
}

video.addEventListener('play', function () {
    var $this = this; //cache
    (function loop() {
        if (!$this.paused && !$this.ended) {
            ctx.drawImage($this, 0, 0);
            setTimeout(loop, 1000 / 30); // drawing at 30fps
        }
    })();
}, 0);
