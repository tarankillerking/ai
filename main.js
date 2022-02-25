Webcam.attach('#camera')
camera=document.getElementById("camera")
Webcam.set({
    width:350,height:300,image_format:'png',png_quality:90
})
function captureimg() {
    Webcam.snap(function (data_uri) {
      document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfieimg">'
    })   
}
console.log(ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mMcPqHUHO/model.json",modelloaded)
function modelloaded() {
    console.log("modelisloaded")

}
function identify() {
    img=document.getElementById("selfieimg")
    classifier.classify(img,gotresult)
}
function gotresult(error,results){
if (error) {
   console.log(error) 
} else {
console.log(results) 
document.getElementById("resultlabel").innerHTML =results[0].label
document.getElementById("label_acuracy").innerHTML =(results[0].confidence *100).toFixed()  
}
}