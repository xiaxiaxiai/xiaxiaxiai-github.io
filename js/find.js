const self_list=[
    {
        sid:1,
        title:"One day in 2096, when the entire planet is in ruins and everyone has entered the digital world, you want:",
        item:[{
            iid:"A",
            code:1,
            content:"Everything in color"
        },{
            iid:"B",
            code:2,
            content:"black, white, grey, and some base colors"
        }],
        tips:"Determine whether the user prefers bright colors or dull, simple colors"
    },
    {
        sid:2,
        title:"After entering the digital world, you can choose an avatar of your own. When you use the avatar to communicate with others, you will choose:",
        item:[{
            iid:"A",
            code:1,
            content:"Cross your hands in front of your chest and appear confident"
        },{
            iid:"B",
            code:3,
            content:"clench your hands and remain nervous"
        },{
            iid:"C",
            code:2,
            content:"Touch your chin or fix your hair in a slightly awkward and unnatural way"
        }],
        tips:"This can distinguish users' social characteristics to determine whether they are extroverted or introverted, and to choose clothing for them"
    },
    {
        sid:3,
        title:"Ace has a super power -- it can change the color of your hair. Your favorite color is:",
        item:[{
            iid:"A",
            code:1,
            content:"Light color"
        },{
            iid:"B",
            code:2,
            content:"Dark color"
        }],
        tips:"Select different shades of clothing for users to match by the shade of hair color"
    },
    {
        sid:4,
        title:"When a bully approaches to replace you in the digital world, you should:",
        item:[{
            iid:"A",
            code:0,
            content:"Defend your identity to the death",
            bl:true
        },{
            iid:"B",
            code:0,
            content:"Surrender to the bully and surrender your identity",
            bl:false
        }],
    },
];
var column=0;
let now_self={};
let self_choose=[];

$(function(){
    now_self=self_list[0];
    create();
    // var sc2=document.createElement("script");
    // sc2.setAttribute("type","module");
    // sc2.setAttribute("src","./js/cloumn4.js");
    // document.body.appendChild(sc2);
    $("#cloumn_box").hide();
})

function chooose(){
    var num=0;
    get_now_answer();
    column++;
    console.log(column>=self_list.length);
    if(column==self_list.length){
        var id=$("input[name='radio']:checked")[0].id;
        if(id.indexOf("A")>=0){
            self_choose.forEach(item=>{
                if(item>0){
                    num=num*1+item*1;
                }
            })
            choose_answer(num);
        }else if(id.indexOf("B")>=0){
            alert("sorry you're out!");
            window.location.href="../index.html";
        }
        column=self_list.length-1;
    }else{
        now_self=self_list[column];
        create();
    }
    // if(column==3){
    //     $("#next_self").html("finish");
    // }
}

function create(){
    var html="<p class='project_title'>"+now_self.sid+"."+now_self.title+"</p>";
    now_self.item.forEach(item=>{
        html+="<p class='project_menu'>"+"<input id="+item.iid+"'_chooose' type='radio' name='radio' value="+item.code+" onclick='chooose()'>"+"<label for="+item.iid+"'_chooose'>"+item.iid+"."+item.content+"</p>";
    });
    // html+="<p>( "+now_self.tips+" )</p>";
    $("#choose_item").html(html);
    $(".project_menu").css("opacity","0");
    $(".project_menu").animate({
        opacity:1
    },4000);
    $(".project_title").css("opacity","0");
    $(".project_title").animate({
        opacity:1
    },2000);
}

function get_now_answer(){
    var radio_value=$("input[name='radio']:checked").val();
    self_choose.push(radio_value);
    console.log(self_choose);
}

function choose_answer(num){
    $("#chooose_box").hide();
    $("#button_self").hide();
    $("#cloumn_box").show();
    if(num==1){
        $("#video_set").attr("src","./img/mp4/2.mp4");
    }else if(num==2){
        $("#video_set").attr("src","./img/mp4/4.mp4");
    }else if(num==3){
        $("#video_set").attr("src","./img/mp4/5.mp4");
    }else if(num==4){
        $("#video_set").attr("src","./img/mp4/3.mp4");
    }else if(num==5){
        $("#video_set").attr("src","./img/mp4/6.mp4");
    }else if(num==6){
        $("#video_set").attr("src","./img/mp4/1.mp4");
    }else if(num==7){
        $("#video_set").attr("src","./img/mp4/7.mp4");
    }
}



$("#back_self").click(function(){
    column--;
    if(column<0){
        column=0;
        alert("That's already the first problem!");
    }else{
        $("#next_self").html("Next >>"); 
        now_self=self_list[column];
        self_choose.pop();
        create();
    }    
})
