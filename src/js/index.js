$(document).ready(() => {
    const clickSwitch = () => {
        if ($("#onoffswitch").is(':checked')) {
            $("#login-btn").css('display', 'none');
            $("#register-btn").css('display', 'inline');
            $("#register-pwd-again").css('visibility', 'visible');
        } else {
            $("#login-btn").css('display', 'inline');
            $("#register-btn").css('display', 'none');
            $("#register-pwd-again").css('visibility', 'hidden');
        }
    };
    $("#onoffswitch").on('click', function(){
        clickSwitch()
    });

});