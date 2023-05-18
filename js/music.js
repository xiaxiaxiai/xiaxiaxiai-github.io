function openMusic(){
    $("audio")[0].play();
}

$(function(){
    var i=0; 
    setInterval(function(){
        i=i+0.05;
        if(i>=100){
            i=0;
        }
        $(".boootom_box_item").css("left",i+"%");
    },1);
});