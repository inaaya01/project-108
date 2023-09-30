

function startClassification() 
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Xq7RdZqHy/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
    }
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"; 

    img = document.getElementById('dog pic for project.gif');
    img1 = document.getElementById('cat for project.gif');
    img2 = document.getElementById('ear pic project.gif');

    if (results[0].label == "barking") {
        img.src = 'dog pic for project.gif';
    } else if(results[0].label == "meow") {
        img1.src = 'cat for project.gif';
    } else{
        img2.src = 'ear pic project.gif';
    }
} 
}