import React from "react";
import { useEffect, useState } from "react";
import { Mylena, Pedro, Samuel, Arrow } from "../../assets";
import { Artists, Text } from "./styles";
import api from "../../services/api";

type Artist = {
  name: string,
  image: string,
  description: string;
}

export const Tattooists: React.FC = () => {
  const [artist, setArtist] = useState<Artist[]>();
  const [index, setIndex] = useState(0);
  const [evenIndex, setEvenIndex] = useState(0);
  const [oddIndex, setOddIndex] = useState(0);
  const [prevState, setPrevState] = useState('next');

  useEffect(() => {
    const func = async () => { 
      const response = await api.get("tattooists"); 
      setArtist(response.data);
    };
    func();
  }, []);

  function handleNext() {
    if (artist && artist[index + 1] && prevState === 'next') {
      switch (index%2) {
        case 0:
          if (artist[oddIndex + 2] && index !== 0) setOddIndex(oddIndex + 2);
          else if (index===0) setOddIndex(1);
        break;
        case 1:
          if(artist[evenIndex+2]) setEvenIndex(evenIndex + 2); 
        break;
      }
      setIndex(index + 1);
    }
    else if (prevState === 'prev') {
      setIndex(index + 1);
      setPrevState('next');
    }
  }
  
  function handlePrev() {
    if (artist && artist[index - 1] && prevState === 'prev') {
      switch (index%2) {
        case 1:
          if(artist[evenIndex-2]) setEvenIndex(evenIndex - 2);
        break;
        case 0:
          if(artist[oddIndex-2]) setOddIndex(oddIndex - 2);
        break;
      }
      setIndex(index - 1);
    }
    else if (prevState === 'next') {
      setIndex(index - 1);
      setPrevState('prev');
    }
  }
  return (
    <Artists>
      <img
        src={artist && artist[oddIndex].image}
        alt=""
        className={index%2 ? "tattooist" : "hidden tattooist"}
        id="ourTattooistAux"
      />
      <img
        src={artist && artist[evenIndex].image}
        alt=""
        className={index%2 ? "hidden tattooist" : "tattooist"}
        id="ourTattooist"
      />
      <Text>
        <h1 id="ourartists">
          Nossos <span>tatuadores</span>
        </h1>
        <br />
        <br />
        <br />
        <h2
          id="name"
          className={index%2 ? "hidden" : ""}
        >{artist && artist[evenIndex].name}</h2>
        <h2
          id="nameAux"
          className={index%2 ? "" : "hidden"}>
        {artist && artist[oddIndex].name}
        </h2>
        <br />
        <p id="description" className={index%2 ? "hidden" : ""}>
          {artist && artist[evenIndex].description}
        </p>
        <p id="descriptionAux" className={index % 2 ? "" : "hidden"}>
        {artist && artist[oddIndex].description}
        </p>
      </Text>
      <div className="arrows">
        <img
          src={Arrow}
          alt="página anterior"
          onClick={handlePrev}
          className={artist && artist[index-1] ? "active arrow" : "inactive arrow" }
          id="prev"
        />
        <img
          src={Arrow}
          alt="próxima página"
          onClick={handleNext}
          className={artist && artist[index + 1] ? "active arrow" : "inactive arrow" }
          id="next"
        />
      </div>
    </Artists>
  );
};