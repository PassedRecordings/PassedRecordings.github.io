
// First attempt - this sort of worked, but relied on having to refresh the page to select a new track
//Ultimately we should delete this bit down to the next comment
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



//This one SHOULD go to the next track automagically
var audio;
var playlist;
var tracks;
var current;

init();
function init(){
    current = 0;
    audio = $('audio');
    playlist = $('#playlist');
    tracks = playlist.find('li a');
    len = tracks.length - 1;
    audio[0].volume = .10;
    audio[0].play();
    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });
    audio[0].addEventListener('ended',function(e){
        current++;
        if(current == len){
            current = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[current];    
        }
        run($(link),audio[0]);
    });
}
function run(link, player){
        player.src = link.attr('href');
        par = link.parent();
        par.addClass('active').siblings().removeClass('active');
        audio[0].load();
        audio[0].play();
}
</script>
