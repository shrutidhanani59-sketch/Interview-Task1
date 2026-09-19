
document.querySelector('.homeScreen p').style.display = "blobk";
document.querySelector('.gameScreen').style.display = "none";

document.querySelector('.homeScreen p').onclick = function () {

    document.querySelector('.gameScreen').style.display = "block";
    document.querySelector('.homeScreen p').style.display = "none";
}





document.querySelector('.userNumber').onchange = function () {
    document.querySelector('.box').innerHTML = document.querySelector('.userNumber').value;


  console.log(parseInt(Math.random)*100);
  

if(Math.random > document.querySelector('.userNumber').value)
{
    alert(" guess Number is high");
}
else{
    alert(" guess Number is low");
}

}


