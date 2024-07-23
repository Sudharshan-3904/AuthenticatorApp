function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#userName").text(profile.getName());
    $("#profile_pic").attribute("src", profile.getImageUrl());
    $("#Email").text(profile.getEmail());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
    // console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log("Name: " + profile.getName());
    // console.log("Image URL: " + profile.getImageUrl());
    // console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have signed out successfully");
    });
    $(".g-signin2").css("display", "block");
    $(".data").css("display", "none");
}
