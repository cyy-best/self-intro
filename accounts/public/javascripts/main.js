$('#time').datepicker({
    format: 'yyyy-mm-dd',
    language: 'zh-CN',
    autoclose: true,
    todayBtn: true,
    todayHighlight: true,
})

function test() {
    let pwd, pwdAgain;
    do {
        pwd = prompt('Enter password');
    }
    while( parseInt(pwd) !== 123456)
    // do {
    //     pwdAgain = prompt('Please enter passcode again');
        
    // }
    // while (pwd != pwdAgain)
        alert('密码正确');
    
}