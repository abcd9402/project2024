/* 240827  비밀번호 찾기 페이지 js */


let certificationNumber;  //인증 번호
let emailCheck=document.getElementById('emailCheck');   //이메일 형식 오류글
let certificationNumberCircle=document.getElementById('certificationNumberCircle'); //인증번호입력 칸
let sendEmailBtn = document.getElementById('sendEmailBtn');     //인증번호 받기 버튼
let confirmNumberBtn = document.getElementById('confirmNumberBtn');  //인증번호 확인 버튼


/* 인증번호 이메일 보내기 */
function sendEmail(){
    alert('이메일 보내기');
    
    let clientEmail=document.getElementById('email').value;
    let EmailYn=isEmail(clientEmail);
    
    console.log('입력 이메일: '+clientEmail);




    if(EmailYn == true){
        console.log('이메일 형식');
        emailCheck.setAttribute('hidden','true');
        
        
        (function(){
            // emailJS PublicKey
           emailjs.init('zzcbXpDOjH8sF5VmK');
        })();
            
            let toName ='aaa';
            let number = Math.random() * 100000 | 0;
            console.log('인증 번호: '+ number);
            certificationNumber = number;
            var templateParams = {
                name: toName,
                contact_number: number,
                recipient: clientEmail,
              };
              
            // 서비스 id, 이메일 템플릿
            // emailjs.send('jung', 'template_r4acywm', templateParams);  //**********이메일 보내는거 임시 중단 추후 열어야함*********** */
            
            certificationNumberCircle.removeAttribute('hidden');
            sendEmailBtn.setAttribute('hidden','true');
            confirmNumberBtn.removeAttribute('hidden');
            console.log('메일 보내기 끝');
        

        

    }else{
        emailCheck.removeAttribute('hidden');
        return
    }
}



/* 인증번호 확인 함수 */
function confirmNumber(){

    let clientNum = document.getElementById('certificationNumber').value;
    console.log(clientNum);
    console.log(certificationNumber);

    if(clientNum == certificationNumber){
        alert('일치.');
        confirmNumberBtn.setAttribute('disabled','true')
    }else{
        alert('일치하지 않습니다.');
        return;
    }


}


/* 이메일 형식 확인 함수 */
function isEmail(email){
    var emailValue = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return emailValue.test(email);
    
}