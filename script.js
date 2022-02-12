flag=0;
function increase_height(){
    if(flag%2==0){
        document.getElementById("backgroundimage").style.height="600px";
    }
    else{
        document.getElementById("backgroundimage").style.height="400px";
    }
    flag++;
    
}