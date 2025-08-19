function addTask(){
    let task = $("#input").val();
    if(task==="")return;
    let checkbox = ("<input type='checkbox' name='' class='completeTask'>");
    let li = $("<li class = 'listItems'></li>");
    let span = $("<span>"+task+"</span>");
    let delBtn = $("<button class = 'delBtn'>Delete Task</button>");
    li.prepend(checkbox);
    li.append(span,delBtn);
    $(".list").append(li);
    $("#input").val("");
    return;
}

$("body").on("keypress",function(event){
    if(event.key == "Enter") addTask();
});

$(".list").on("click",".delBtn",function(event){
    console.log(event);
    $(this).parent().remove();

});

$(".list").on("click",".completeTask",function(){
    if($(this).prop("checked")){
        $(this).siblings("span").addClass("completed");
    }else{
        $(this).siblings("span").removeClass("completed");
    }
});