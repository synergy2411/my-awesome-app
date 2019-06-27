$(document).ready(function(){
    let users = [];
    $("#getUsers").on("click", function(event){
        event.preventDefault();
        alert("Getting Users...")
        // console.log("[USERS]", users);
        users.forEach(user => {
            let div = document.createElement("div");
            div.innerHTML = "<h3>" + user.name +"</h3>";
            div.setAttribute("class", "container well");
            div.setAttribute("id", user._id);
            $("#userList").append(div);
        })
    })

    $("#deleteUser").click(function(){

    })



    $.ajax({
        method : "GET",
        url : "http://localhost:3030/users",
        success : function(response) {
            console.log(response);
            users = response;
        },
        error : function(err){
            console.log(err);
        }
    })
})