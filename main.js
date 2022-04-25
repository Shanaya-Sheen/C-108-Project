function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/iFIIsmqeX/model.json", modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_label").innerHTML = "I can hear- " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Probability- " + (results[0].confidence * 100).toFixed(2) + "%";
        img1 = document.getElementById("cat");
        img2 = document.getElementById("dog");
        if (results[0].label == "Meow") {
            img1.src = "cat.gif";
            img2.src = "pug.jpg";
        
        } else {
            img1.src = "5.png";
            img2.src = "pug.gif";
        }
    }

}