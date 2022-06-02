import React from "react";
import { useEffect } from "react";
import { Mylena, Pedro, Samuel, Arrow } from "../../assets";
import { Artists, Text } from "./styles";
import axios from "axios";

export const Tattooists: React.FC = () => {
  useEffect(() => {
    const Tattooist: { image: string; title: string; description: string }[] = [
      { image: Samuel, title: "Samuel Reis", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus odio sit amet sollicitudin porta. Integer in elit ut enim accumsan pellentesque. Phasellus sit amet tortor orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { image: Mylena, title: "Mylena Soares", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio natus facere qui eum, odio atque corporis eaque veniam magnam necessitatibus aut expedita illo, laudantium deleniti perferendis vel? Similique, culpa?" },
      { image: Pedro, title: "Pedro Basílio", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem repellendus suscipit fugit corrupti quo tempora! Animi dolorum ducimus dolor error quae voluptatum consequuntur voluptatibus sunt, beatae cupiditate culpa, excepturi rem" },
    ];
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const nome = document.getElementById("name");
    const nomeAux = document.getElementById("nameAux");
    const ourTattooist = document.getElementById("ourTattooist") as HTMLImageElement;
    const ourTattooistAux = document.getElementById("ourTattooistAux") as HTMLImageElement;
    const description = document.getElementById("description");
    const descriptionAux = document.getElementById("descriptionAux");
    const isAnyUndefined = !(next && nome && ourTattooistAux && nomeAux && ourTattooist && prev && description && descriptionAux);
    let index = 0;
    if (!isAnyUndefined) {
      next.addEventListener("click", () => {
        console.log(index);
        switch (index % 2) {
          case 0:
            if (index < Tattooist.length - 1) {
              ++index;
              ourTattooistAux.src = Tattooist[index].image;
              nomeAux.innerText = Tattooist[index].title;
              descriptionAux.innerText = Tattooist[index].description;
              description.classList.add("hidden");
              descriptionAux.classList.remove("hidden");
              ourTattooist.classList.add("hidden");
              ourTattooistAux.classList.remove("hidden");
              nomeAux.classList.remove("hidden");
              nome.classList.add("hidden");
              if (index === 1) {
                prev.classList.remove("inactive");
                prev.classList.add("active");
              }
              if (index === Tattooist.length - 1) {
                next.classList.add("inactive");
                next.classList.remove("active");
              }
            }
            break;
          case 1:
            if (index < Tattooist.length - 1) {
              ++index;
              ourTattooist.src = Tattooist[index].image;
              nome.innerText = Tattooist[index].title;
              description.innerText = Tattooist[index].description;
              descriptionAux.classList.add("hidden");
              description.classList.remove("hidden");
              ourTattooistAux.classList.add("hidden");
              ourTattooist.classList.remove("hidden");
              nome.classList.remove("hidden");
              nomeAux.classList.add("hidden");
              if (index === Tattooist.length - 1) {
                next.classList.add("inactive");
                next.classList.remove("active");
              }
            }
          break;
        }
      });
      prev.addEventListener("click", () => {
        console.log(index);
        switch (index % 2) {
          case 1:
            --index;
            nome.innerText = Tattooist[index].title;
            ourTattooist.src = Tattooist[index].image;
            description.innerText = Tattooist[index].description;
            descriptionAux.classList.add("hidden");
            description.classList.remove("hidden");
            ourTattooistAux.classList.add("hidden");
            ourTattooist.classList.remove("hidden");
            nome.classList.remove("hidden");
            nomeAux.classList.add("hidden");
            if (index === 0) {
              prev.classList.add("inactive");
              prev.classList.remove("active");
            }
            if (index === Tattooist.length - 2) {
              next.classList.remove("inactive");
              next.classList.add("active");
            }
            break;
          case 0:
            if (index !== 0) {
              --index;
              ourTattooistAux.src = Tattooist[index].image;
              nomeAux.innerText = Tattooist[index].title;
              descriptionAux.innerText = Tattooist[index].description;
              description.classList.add("hidden");
              descriptionAux.classList.remove("hidden");
              ourTattooist.classList.add("hidden");
              ourTattooistAux.classList.remove("hidden");
              nomeAux.classList.remove("hidden");
              nome.classList.add("hidden");
              next.classList.remove("inactive");
              next.classList.add("active");
              if (index === Tattooist.length - 2) {
                next.classList.remove("inactive");
                next.classList.add("active");
              }
            }
            break;
        }
      });
    }
  }, []);
  return (
    <Artists>
      <img src="" alt="" className="tattooist" id="ourTattooistAux" />
      <img
        src={Samuel}
        alt="foto do tatuador"
        className="tattooist"
        id="ourTattooist"
      />
      <Text>
        <h1 id="ourartists">
          Nossos <span>tatuadores</span>
        </h1>
        <br />
        <br />
        <br />
        <h2 id="name">Samuel Reis</h2>
        <h2 id="nameAux" className="hidden">
          Samuel Reis
        </h2>
        <br />
        <p id="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus odio sit amet sollicitudin porta. Integer in elit ut enim
          accumsan pellentesque. Phasellus sit amet tortor orci. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
        <p id="descriptionAux" className="hidden"></p>
      </Text>
      <div className="arrows">
        <img
          src={Arrow}
          alt="próxima página"
          className="inactive arrow"
          id="prev"
        />
        <img
          src={Arrow}
          alt="página anterior"
          className="active arrow"
          id="next"
        />
      </div>
    </Artists>
  );
};
