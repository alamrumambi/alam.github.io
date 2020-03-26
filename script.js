var result = 0;
function scr(input){
    var hom = document.getElementById("opening");
    var welcome = document.getElementById("pilih-angka");
    var layer1 = document.getElementById("layer1");
    var layer2 = document.getElementById("layer2");
    var layer3 = document.getElementById("layer3");
    var layer4 = document.getElementById("layer4");
    var layer5 = document.getElementById("layer5");
    var layer6 = document.getElementById("layer6");
    var layer7 = document.getElementById("layer7");
    var result1 = document.getElementById("result");
    var wrongResult = document.getElementById("wrongResult");
    var finish = document.getElementById("finish");
    var hasil = document.getElementById("ending");

    if (input == 'next'){
        if (welcome.style.display == "block"){
            welcome.style.display = "none";
            layer1.style.display = "block";
        }
        else {
            welcome.style.display = "block";
            hom.style.display = "none"
        }
    }

    else if (input == 'home'){
        let arr = [welcome, layer1, layer2, layer3, layer4,
            layer5, layer6, layer7, wrongResult, finish]
        
        for (let i in arr){
            if (arr[i].style.display == "block"){
                arr[i].style.display = "none";
                hom.style.display = "block";
                result = 0;
                break;
            }
        } 
    }

    else if (input == 'layerY' || input == 'layerT'){
        let arr = [[layer1, 1], [layer2, 2], [layer3, 4], [layer4, 8],
        [layer5, 16], [layer6, 32], [layer7, 64]];

        for (let i in arr){
            if (arr[i][0].style.display == "block"){
                if (input == 'layerY'){
                    result += arr[i][1];
                } 
                if (Number(i) == arr.length - 1){
                    arr[i][0].style.display = "none";
                    if (result > 100 || result < 1){
                        wrongResult.style.display = "block";
                    }
                    else {
                        hasil.innerHTML = result;
                        finish.style.display = "block";
                    }
                    break;
                }
                arr[i][0].style.display = "none";
                arr[Number(i) + 1][0].style.display = "block";
                break;
            }
        }
    }
}