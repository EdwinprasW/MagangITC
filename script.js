const dataWest = ["Batu Mentas", "Danau Kaolin", "Tanjung Tinggi", "Tanjung Kelayang", "Bukit Berahu", "Gusong Bugis"];

const container1 = document.querySelector('#westlist')
for (const west of dataWest) {

    const li = document.createElement('li');
    li.innerText = west
    container1.appendChild(li)
}

const dataEast = ["Pantai Serdang", "Bukit Pangkuan", "Pantai Burung Mandi", "Kota Manggar"];

const container2 = document.querySelector('#eastlist')
for (const east of dataEast) {

    const li = document.createElement('li');
    li.innerText = east
    container2.appendChild(li)
}


let slideIndex1 = 0;
let slideIndex2 = 0;
showSlides1();
showSlides2();

function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) { slideIndex1 = 1 }
    slides[slideIndex1 - 1].style.display = "block";
    setTimeout(showSlides1, 5000); // Change image every 2 seconds
}

function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) { slideIndex2 = 1 }
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides2, 5000);
}