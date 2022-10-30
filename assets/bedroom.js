// @ts-nocheck
let objects = {};
var statusa = "";
/**
 * 
 * @param {*} selectors 
 * Finds the first elenment that matches the selectors
 */
let $ = (selectors) => document.querySelector(selectors);
let qs = (selectors) => querySelector(selectors);
function setup(){
    var canvas = createCanvas(localStorage.getItem("w"), localStorage.getItem("h"));
    canvas.center();
    start()
}
function preload(){
   var name = localStorage.getItem("imageURL");
    img = loadImage(name);
}
function modelLoaded(){
    console.log("Model Loaded");
    statusa = true; 
}
function gotResult(err, results) {
    if(err){
        console.log(err);
    }
    console.log(results);
    objects = results;    
}
function draw() {
    image(img, 0, 0);

    objectDetector.detect(img, gotResult);
    if(statusa != ""){
        for(let i=0; i<objects.length; i++){
            $("#status").textContent = "Status: Object Detected";
            $("#final").textContent = `There are ${localStorage.getItem("int")} big objects, in which ${objects?.length} were detected`;
            fill("#ff0000");
            let percent = floor(objects[i].confidence*100);
            text(`${objects[i].label} ${percent}%`, objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height, );
        }
    }
    

}
let start = () => {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
