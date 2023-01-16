// Send Get Request To Get Data

async function fetchCarousels() {
  await Promise.resolve()
      .then(() => {
          const xhr = new XMLHttpRequest();
          xhr.open('POST', '/carousel');
          xhr.send();
          xhr.onreadystatechange = () => {
              if (xhr.readyState === XMLHttpRequest.DONE) {
                  if (xhr.status === 200) {
                      data = JSON.parse(xhr.responseText);
                      for (let carouselName in data) {
                        carouselElement = document.createElement("div");
                        carouselElement.className = "carousel flex";
                        carouselElement.id = carouselName;
                        document.getElementById("carousel-container").appendChild(carouselElement);
                        let carousel = document.getElementById(carouselName);
                        for (let image in data[carouselName]) {
                            imageElement = document.createElement("img");
                            imageElement.src = `/static/images/carousels/${carouselName}/${data[carouselName][image]}`;
                            imageElement.alt = data[carouselName][image];
                            carousel.appendChild(imageElement);
                            imageElement.style.opacity = 1;
                        }
                      }
                  } else {
                      console.log(xhr.status)
                  }
              }
          };
      })
      .catch(error => {
          console.log(error)
      });
}

window.onload = function () {
  fetchCarousels();
}
