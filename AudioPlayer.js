  <script>
    function myFunction() {
       fileArray = ["https://passedrecordingsblog.wordpress.com/wp-content/uploads/2025/06/sublimation.mp3",
                    "https://passedrecordingsblog.wordpress.com/wp-content/uploads/2025/06/in-the-darkness-hope.mp3",
                    "https://passedrecordingsblog.wordpress.com/wp-content/uploads/2025/06/nemophilist.mp3",
                    "https://passedrecordingsblog.wordpress.com/wp-content/uploads/2025/06/soon.mp3",
                    "https://passedrecordingsblog.wordpress.com/wp-content/uploads/2025/06/blue-point.mp3"];
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
