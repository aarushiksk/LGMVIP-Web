var row=1;
var add=document.getElementById("add");
add.addEventListener("click",display);

function display(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var city=document.getElementById("city").value;
    var email=document.getElementById("email").value;
    var skills=document.getElementById("skills").value;
    if(name==""||age==""||city==""||email==""||skills=="")
    {
        alert("Kindly fill all the fields");
        return;
    }
    var display=document.getElementById("display");
    var newrow= display.insertRow(row);

    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2);
    var cell4=newrow.insertCell(3);
    var cell5=newrow.insertCell(4);

    cell1.innerHTML=name;
    cell2.innerHTML=age;
    cell3.innerHTML=city;
    cell4.innerHTML=email;
    cell5.innerHTML=skills;
    row+=1;
}

