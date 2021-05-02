
function sendMail(str) {
    var link = "axelice89@gmail.com" + "&subject=" + escape("This is my subject") + "&body=" + escape(str);
    location.href = link;
}
function submit_comment() {
    var name = document.forms["contact_form"]["name"].value;
    var email = document.forms["contact_form"]["email"].value;
    var phone = document.forms["contact_form"]["phone"].value;
    var text = document.forms["contact_form"]["text"].value;
    
    if ((name != "") && (email != "") && (phone != "")) {
        sendMail("HELLO");
    }
}