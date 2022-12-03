// getting elements from HTML & also getting API's
let api_key = "AIzaSyBjPMHH60HfCHBdg9E6wif8DdFP1VcwQkM";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";
let subscription_http = "https://www.googleapis.com/youtube/v3/subscriptions?";
const video_card = document.querySelector(".video-container");

// use of fetch function to get all the vidos from youtube
fetch(video_http + new URLSearchParams({
      key: api_key,
      part: "snippet",
      chart: "mostPopular",
      maxResults: 100,
      regionCode: "PK",
    })
)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)
    data.items.forEach((item) => {
      getChannelIcon(item);
    });
  })
  // using catch funtion if error occurs
  .catch((error) => console.log(error));

  // getting channel icon from youtube library
const getChannelIcon = (video_data) => {
  fetch(
    channel_http +
      new URLSearchParams({
        key: api_key,
        part: "snippet",
        id: video_data.snippet.channelId,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      video_data.channelThumbnail =
        data.items[0].snippet.thumbnails.default.url;
      makeVieoCard(video_data);
    });
};

// creating video_card for aligning videos on the browser 
const makeVieoCard = (data) => {
  video_card.innerHTML += `
    <div class="video" onclick="location.href = 'http://youtube.com/watch?v=${data.id}'">
            <img src="${data.snippet.thumbnails.high.url}" class="thumb">
            <div class="content">
                <img src="${data.channelThumbnail}" class="channel-icon">
                <div class="info">
                    <h4 class="title">${data.snippet.title}</h4>
                    <p class="channel-name">${data.snippet.channelTitle}</p>
                </div>
                <div class="subcription">
                    <p class="subscription">subcription</p>
                </div>
            </div>
        </div>
        `;
};

// search section functionality
const search_input = document.querySelector(".search-bar");
const search_btn = document.querySelector(".search-btn");
let search_link = "http://www.youtube.com/results?search_query=";

search_btn.addEventListener("click", () => {
  if (search_input.value.length) {
    location.href = search_link + search_input.value;
  }
});

// profile_detail

const profile_detail = document.querySelector(".profile_detail");
const profile_image = document.querySelector("#profile_link");
profile_image.addEventListener("click", () => {
  profile_detail.style.display = "block";
});

// Logo location
let logo_http = "http://127.0.0.1:5500/index.html";
const logo_link = document.querySelector(".logo_link");

logo_link.addEventListener("click", () => {
  location.href = logo_http;
});

// All location
let all_http = "https://www.youtube.com/results?search_query=all?";
const all_link = document.querySelector(".all_link");

all_link.addEventListener("click", () => {
  location.href = all_http;
});

// HTML location
let html_http = "https://www.youtube.com/results?search_query=hTML";
const html_link = document.querySelector(".html_link");

html_link.addEventListener("click", () => {
  location.href = html_http;
});
//----------------------//

// CSS location
const css_link = document.querySelector(".css_link");
let css_http = "https://www.youtube.com/results?search_query=css";

css_link.addEventListener("click", () => {
  location.href = css_http;
});
//--------------------//

// Entertainment location
let entertainment_http =
  "https://www.youtube.com/results?search_query=entertainment";
const entertainment_link = document.querySelector(".entertainment_link");

entertainment_link.addEventListener("click", () => {
  location.href = entertainment_http;
});
//-----------------//

// Chill location
let chill_http = "https://www.youtube.com/results?search_query=chill";
let chill_link = document.querySelector(".chill_link");

chill_link.addEventListener("click", () => {
  location.href = chill_http;
});
//----------------------//

// Python location

let python_http = "https://www.youtube.com/results?search_query=python";
const python_link = document.querySelector(".python_link");

python_link.addEventListener("click", () => {
  location.href = python_http;
});
//------------------//

// Music location

let music_http = "https://www.youtube.com/results?search_query=music";
const music_link = document.querySelector(".music_link");

music_link.addEventListener("click", () => {
  location.href = music_http;
});
//------------------//

// Movie location

let movie_http = "https://www.youtube.com/results?search_query=movies";
const movie_link = document.querySelector(".movie_link");

movie_link.addEventListener("click", () => {
  location.href = movie_http;
});
//-----------------//

// Shows location

let show_http = "https://www.youtube.com/results?search_query=shows";
const show_link = document.querySelector(".show_link");

show_link.addEventListener("click", () => {
  location.href = show_http;
});
//------------------//

// Tutorial location

let tutorial_http = "https://www.youtube.com/results?search_query=tutorials";
const tutorial_link = document.querySelector(".tutorial_link");

tutorial_link.addEventListener("click", () => {
  location.href = tutorial_http;
});
//--------------------//
let trending_http = "https://www.youtube.com/results?search_query=trending";
const trending_link = document.querySelector(".trending_link");

trending_link.addEventListener("click", () => {
  location.href = trending_http;
});

// Dropdown menu creation and their functionality

const dropdown = document.querySelector(".profile_detail");
const profile_link = document.querySelector("#profile_link");

profile_link.addEventListener("click", () => {
  if (dropdown.style.display == "none") {
    dropdown.style.display = "block";
  }
});

const hide_dropdown = document.querySelector(".delete");

hide_dropdown.addEventListener("click", () => {
  dropdown.style.display = "none";
});
