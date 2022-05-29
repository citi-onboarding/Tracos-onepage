import React from "react";
import { Mylena, Pedro, Samuel, Arrow } from "../../assets";
import { Artists, Text } from './styles';

export const Tattooists: React.FC = () => {
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
        <h1 id="ourartists">Nossos Tatuadores</h1>
        <br />
        <br />
        <h2 id="name">Samuel Reis</h2>
        <h2 id="nameAux" className="hidden">Mylena Soares</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus odio sit amet sollicitudin porta. Integer in elit ut enim
          accumsan pellentesque. Phasellus sit amet tortor orci. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
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
}