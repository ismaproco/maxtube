/* main, application file */
    
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '100%',
          width: '100%',
          videoId: 'M7lc1UVf-VE',
          autoplay: 1,
          autohide: 1,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
    }
    
    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        //event.target.playVideo();
    }
    
    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
    }
    
    function stopVideo() {
        player.stopVideo();
    }
    
// page start parameter
$(document).ready(function(){
    var heap = new Heap();
    var serviceURL = "http://localhost:3000/getTimer";
    
    $("#playerContainer").hide();
    
    // Shows the Dashboard container
    $("#startPlayerButton").click(function(){
        $("#playerContainer").show();
        $("#dashBoardContainer").hide();
        startPlayer(); 
    });
    
    /*
  setInterval(function() {
    
    var queryTime = Date.now().toString();
    $.ajax({
      url: serviceURL,
    }).done(function(data){
      console.log('R time:' + queryTime, 'S time:' + data);
    }).fail(function(err){
      console.log('Error:'+err);
    });

  }, 1000);
  */

});
    
var startPlayer = function()
{
    // hides the playercontainer
    
    player.playVideo();
    
}


