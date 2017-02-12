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







document.querySelector('#cal').addEventListener('date-change', function (e) {
    // console.log(e);

});