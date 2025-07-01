
const imgEl = document.createElement("img");
imgEl.src = "https://fastly.picsum.photos/id/180/2000/1600.jpg?hmac=dr3QTXUHbgPDvKgE9s2UjynoVFsZdxoLI3cxK8YZd9A";
imgEl.alt = "Random image";
imgEl.style.maxWidth = "300px";
imgEl.style.display = "block";
imgEl.style.marginBottom = "20px";
document.body.appendChild(imgEl);

// characters
const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "https://ik.imagekit.io/hpapi/hermione.jpeg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "https://ik.imagekit.io/hpapi/ron.jpg",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "https://ik.imagekit.io/hpapi/draco.jpg",
    actor: "Tom Felton",
  }
];

// ქარდების html
const sectionEl = document.getElementById("characters-list");
const charactersHtml = characters.map((char, index) => {
  return `
    <div class="character-card" id="character-${index}">
      <img src="${char.image}" alt="${char.first_name} ${char.last_name}">
      <h3>${char.first_name} ${char.last_name}</h3>
      <p>${char.house}</p>
      <button class="delete-btn">წაშლა</button>
      <button class="info-btn">ინფო</button>
      <div class="actor-info" style="display:none;">${char.actor}</div>
    </div>
  `;
}).join("");

sectionEl.innerHTML = charactersHtml;

// ფუნქციონალი
document.querySelectorAll(".delete-btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const card = event.target.closest(".character-card");
    if (card) {
      card.remove();
    }
  });
});

document.querySelectorAll(".info-btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const card = event.target.closest(".character-card");
    const actorInfo = card.querySelector(".actor-info");
    if (actorInfo) {
      actorInfo.style.display = actorInfo.style.display === "none" ? "block" : "none";
    }
  });
});

