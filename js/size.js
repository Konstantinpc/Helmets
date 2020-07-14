var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
output.innerHTML = "L";
output1.innerHTML = "L";
slider.oninput = function() {
    if(this.value==0)
        output.innerHTML = "XS";
    else if(this.value==20){
        output.innerHTML = "S";
    }else if(this.value==40){
        output.innerHTML = "M";
    }else if(this.value==60){
        output.innerHTML = "L";
    }else if(this.value==80){ 
        output.innerHTML = "XL";
    }else if(this.value==100){
        output.innerHTML = "XXL";
    }
    }
slider1.oninput = function() {
    if(this.value==0)
        output1.innerHTML = "XS";
    else if(this.value==20){
        output1.innerHTML = "S";
    }else if(this.value==40){
        output1.innerHTML = "M";
    }else if(this.value==60){
        output1.innerHTML = "L";
    }else if(this.value==80){ 
        output1.innerHTML = "XL";
    }else if(this.value==100){
        output1.innerHTML = "XXL";
    }
    }
    function getSize(d){
        var new_t = document.getElementById(d).innerHTML;
        return new_t
      }