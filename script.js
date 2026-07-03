
    function submitForm() {

    let visitorName = document.getElementById("name").value;
    let visitorEmail = document.getElementById("email").value;
    let reason = document.getElementById("reason").value;
    let visitorMessage = document.getElementById("message").value;

    if (visitorName == "" || visitorEmail == "" || reason == "" || visitorMessage == "") {

        alert("Please fill in all the fields.");

    }

    else {

        let reply = "Thank you " + visitorName + " for visiting Zeenash Fatima's portfolio. Your message about " + reason + " has been received.";

        alert(reply);

        document.getElementById("reply").innerHTML = reply;

    }

}
