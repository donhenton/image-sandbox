function importSVG(sourceSVG, targetCanvas) {
    // https://developer.mozilla.org/en/XMLSerializer
    // var svg_xml = (new XMLSerializer()).serializeToString(sourceSVG);
    var ctx = targetCanvas.getContext('2d');
    //console.log(sourceSVG)
    //console.log("drawing image to canvas 1 " + btoa(unescape(encodeURIComponent(sourceSVG)))+" "+ctx);
    // this is just a JavaScript (HTML) image
    // var img = new Image();
    //var img = document.createElement('img')
    var img = new Image();
     
    // http://en.wikipedia.org/wiki/SVG#Native_support
    // https://developer.mozilla.org/en/DOM/window.btoa
    

    img.onload = function () {
        // after this, Canvas’ origin-clean is DIRTY
        console.log("drawing image to canvas 2");
        ctx.drawImage(img, 0, 0);
    }
    //img.src = "images/a1.jpg";
    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(sourceSVG)));
     
    return img;
}



$(document).ready(
        function () {
            console.log("doing the image thing")
            //var img1 = new Image();
            //var img2 = new Image();
            //img1.src = "images/a1.jpg";
            //img2.src = "images/a2.jpg";

            //demo1
            //var iArray = ["images/a1.jpg","images/a2.jpg"]
            //loadImagesDemo1(iArray,doWhenImagesLoadedDemo1)

            //$("#displayImage").attr('src', img2.src);
            var varTarget = $('svg').html();
            varTarget = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">'+varTarget+'</svg>'
        //    console.log("\n\n"+varTarget+"\n\n")
        // var   svgContent = 
        //         '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">'+
        //         '<rect width="150" height="150" fill="rgb(0, 255, 0)" stroke-width="1" stroke="rgb(0, 0, 0)" />'+
        //         '</svg>';
            
            var svgContent = varTarget;
            var newImage = importSVG(svgContent, $('#myCanvas')[0]);
            
            $("#displayImage").attr('src', newImage.src);
            console.log("width "+newImage.width+","+newImage.height)
            // $("#displayImage").attr('width', '500px');
           //  console.log($("#displayImage").attr('src'));



        });
// canvas draw demo1 //
function doWhenImagesLoadedDemo1(arr)
{
    console.log(arr)
    var targetCanvas = document.getElementById('myCanvas');
    var ctx = targetCanvas.getContext('2d');
    var img1 = arr[0];

    ctx.drawImage(img1, 0, 0, img1.width, img1.height,
            0, 0, targetCanvas.width, targetCanvas.height);
}


function loadImagesDemo1(arr, callback) {
    //this.images = {};
    var loadedImageCount = 0;
    var loadedImageArray = [];

    // Make sure arr is actually an array and any other error checking
    for (var i = 0; i < arr.length; i++) {
        var img = new Image();
        img.onload = imageLoaded;
        img.src = arr[i];
        // this.images[arr[i]] = img ;
        loadedImageArray.push(img)
    }

    function imageLoaded(e) {
        loadedImageCount++;
        if (loadedImageCount >= arr.length) {
            callback(loadedImageArray);
        }
    }
}
///////////////////////////////////////////////////////