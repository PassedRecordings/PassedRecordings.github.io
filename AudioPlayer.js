  <script>
    function myFunction() {
       fileArray = ["sublimation.mp3", "in-the-darkness-hope.mp3", "nemophilist.mp3", "soon.mp3", "blue-point.mp3"];
       var num = Math.floor(Math.random() * fileArray.length);
       var x = document.getElementById("music");
       x.src = fileArray[num]; 

       var audio = document.getElementById("music");
       audio.volume = 0.2;
       audio.autoplay = true;
       audio.load();
    }

    myFunction()

</script>
