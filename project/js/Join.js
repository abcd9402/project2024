
/* 240826  회원가입 페이지 JS */



//메일 주소 변경
function selectEmail(mail){
    alert(mail);
    $("#emailBack").val(mail);
    var emailFront=$("#emailFront").val();
    var emailBack=$("#emailBack").val();
    $("#email").val(emailFront+"@"+emailBack);
}


//이메일 주소 합치기
function combineEmail(){
    
    var emailFront=$("#emailFront").val();
    var emailBack=$("#emailBack").val();
    $("#email").val(emailFront+"@"+emailBack);
    
}

//실시간 비밀번호 재확인
function passCheck(pass,passCheck){
    
    if(pass !=passCheck){
        $("#passCheck").show();
    }else{
        $("#passCheck").hide();
    }
}

//이미지 미리보기
function previewImg(event){

    var reader = new FileReader();

    reader.onload = function(event) {
        var img = document.createElement("img");
        img.setAttribute("src", event.target.result);
        document.querySelector("div#previewImg").appendChild(img);
    };

    reader.readAsDataURL(event.target.files[0]);
}