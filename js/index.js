$(document).ready( function() {
    randomshow();
    var count = 0;
    $("#penguin1").one("click",function() {
        count=count+1;
        $("#c_Score").val(count);
        var sound = document.getElementById("audiosound");
        sound.play();
        if(count>=8){
          alert("you are winner\n \n you scored 8");
            $("#c_Score").val(0);
            window.location.reload();
           
          }
          $("#penguin1").css( "visibility", "hidden" );
    });
    $("#penguin2").one("click",function() {
        count=count+1;
        $("#c_Score").val(count);
        var sound = document.getElementById("audiosound");
        sound.play();
        if(count>=8){
          alert("you are winner\n \n you scored 8");
            $("#c_Score").val(0);
            window.location.reload();         
            
          }
        $("#penguin2").css( "visibility", "hidden" );
    });
    $("#penguin3").one("click",function() {
        count=count+1;
        $("#c_Score").val(count);
        var sound = document.getElementById("audiosound");
        sound.play();
        if(count>=8){
          alert("you are winner\n \n you scored 8");
            $("#c_Score").val(0);
            window.location.reload();

          }
        $("#penguin3").css( "visibility", "hidden" )
    });
    $("#penguin4").one("click",function() {
        count=count+1;
        $("#c_Score").val(count);
        var sound = document.getElementById("audiosound");
        sound.play();
        if(count>=8){
          alert("you are winne\n \n you scored 8");
            $("#c_Score").val(0);
            window.location.reload();

          }
        $("#penguin4").css( "visibility", "hidden" );
    });
    $("#penguin5").one("click",function() {
        count=count+1;
        $("#c_Score").val(count);
        var sound = document.getElementById("audiosound");
        sound.play();
        if(count>=8){
          alert("you are winner\n \n you scored 8");
            $("#c_Score").val(0);
            window.location.reload();

          }
        $("#penguin5").css( "visibility", "hidden");
    });
    $("#penguin6").one("click",function() {
        count=count+1;
        $("#c_Score").val(count);
        var sound = document.getElementById("audiosound");
        sound.play();
        if(count>=8){
          alert("you are winner\n \n you scored 8");
            $("#c_Score").val(0);
            window.location.reload();

          }
        $("#penguin6").css( "visibility", "hidden" );
    });
    $("#penguin7").one("click",function() {
        count=count+1;
        $("#c_Score").val(count);
        var sound = document.getElementById("audiosound");
        sound.play();
        if(count>=8){
          alert("you are winner\n \n you scored 8");
            $("#c_Score").val(0);
            window.location.reload();

          }
        $("#penguin7").css( "visibility", "hidden" );
    });
    $("#penguin8").one("click",function() {
        count=count+1;
        $("#c_Score").val(count);
        var sound = document.getElementById("audiosound");
        sound.play();
        if(count>=8){
          alert("you are winner\n \n  you scored 8");
            $("#c_Score").val(0);
            window.location.reload();

          }
        $("#penguin8").css( "visibility", "hidden" );
    });
    $("#penguin9").one("click",function() {
        count=count+1;
        $("#c_Score").val(count);
        var sound = document.getElementById("audiosound");
        sound.play();
        if(count>=8){
          alert("you are winner\n \n you scored 8");
            $("#c_Score").val(8);
            window.location.reload();

          }
        $("#penguin9").css( "visibility", "hidden" );   
    });

    $("#yeti").one("click",function() {
        $(".ss").css( "visibility", "visible" ); //for showing rest of the penguins
        var sound = document.getElementById("audiosound1");
        sound.play();
        alert("YOU WAKE UP YETI \n \n \n Play Again ?");

        $("#c_Score").val(0);  
        window.location.reload();
              
    });

    $("#btn").one("click",function() {
        window.location.reload();
     });
    
    
});
function randomshow(){
    var n=Math.floor(Math.random()*9);
    $("#penguin"+n).addClass('yetti');
    $("#penguin"+n).attr('id','yeti');
}
