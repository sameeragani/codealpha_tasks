let images = [

    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1043/600/400",
    "https://picsum.photos/id/1056/600/400",
    "https://picsum.photos/id/237/600/400",
    "https://picsum.photos/id/1068/600/400"

];

let currentImage = 0;

function openLightbox(index){

    currentImage = index;

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src =
    images[currentImage];
}

function closeLightbox(){

    document.getElementById("lightbox").style.display =
    "none";
}

function nextImage(){

    currentImage++;

    if(currentImage >= images.length){

        currentImage = 0;
    }

    document.getElementById("lightbox-img").src =
    images[currentImage];
}

function prevImage(){

    currentImage--;

    if(currentImage < 0){

        currentImage = images.length - 1;
    }

    document.getElementById("lightbox-img").src =
    images[currentImage];
}

function filterImages(category){

    let items =
    document.querySelectorAll(".gallery-item");

    items.forEach(function(item){

        if(category == "all"){

            item.style.display = "block";
        }

        else if(item.classList.contains(category)){

            item.style.display = "block";
        }

        else{

            item.style.display = "none";
        }

    });

}