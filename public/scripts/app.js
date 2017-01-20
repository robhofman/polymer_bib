if(document.documentElement.clientWidth>1200){
    alert("deze site is in ontwikkeling en voorlopig best bereikbaar via een mobiele browser");
}

(function () {
    if(jQuery){
        console.log("jQuery loaded");
    }
    else{
        console.log("no jquery baby");
    }




})();




window.addEventListener('WebComponentsReady', function(e) {
    //todo de data niet met time out inladen.. dit is niet proper maar zonder is dates.length steeds 0
    setTimeout(function(){
        var dates = document.getElementsByClassName("dateSticker");
        console.log(dates.length);
        for(var i=0; i<dates.length; i++){
            if(i==13){
                //ter voorbeeld dat we de elementen van hieruit kunnen benaderen. Als we er op klikken verandert de BG wel niet meer.
                dates[i].style.background = "red";
                dates[i].style.color = "white";
            }
        }
    }, 10);

});


document.querySelector('#cal').addEventListener('date-change', function (e) {
    // console.log(e);

});