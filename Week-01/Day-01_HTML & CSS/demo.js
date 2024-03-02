function checkValue(){
    const data = document.demoform.uname.value;
    if(data==""){
        document.getElementById("show").innerHTML='Name cannot be blank';
        console.log("data cannot be blank");
    }
    console.log(data);
}