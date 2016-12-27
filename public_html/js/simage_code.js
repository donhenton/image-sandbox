var imageObj = null;

$(document).ready(
        function () {
            
            
   imageObj = new Simg($('svg')[0]);  
            
            
            
            
            
            
});

function doScreenShot()
{
    var imageRef = $("#targetImage")[0];
    imageObj.toUsableImg(imageRef);
    
}

function doDownload()
{
    
    imageObj.download("graphDownload");
    
}