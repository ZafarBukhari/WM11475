function getNum(num,or=false) {
    var result = document.getElementById("resultContainer");
    if(or){
        result.value = num;  
    }
    else{
        result.value += num;
    }    
}


function clearRes() {
    var result = document.getElementById("resultContainer");
    result.value = ""
}


function getRes() {
    var result = document.getElementById("resultContainer");
    result.value = eval(result.value);
}

function back() {
    var result = document.getElementById("resultContainer").value;
    result = result.substr(0,result.length-1);
    document.getElementById("resultContainer").value = result;
}

function _e(id)
{
    return document.getElementById(id);
}