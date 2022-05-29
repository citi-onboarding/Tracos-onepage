import styled from 'styled-components';

export const Artists = styled.div`
  font-family: "NoirPro-Regular";
  display: grid;
  grid-template-columns: 1fr 2.3fr 4.08fr 1fr;
  column-gap: 70px;
  grid-template-rows: 2fr 18.45fr 1fr 1.8fr;

  .hidden {
  opacity: 0 !important;
}

.tattooist {
  opacity: 1;
  grid-column: 2/2;
  grid-row: 1/5;
  width: 100%;
  min-width: 335px;
  transition: opacity 0.3s linear;
}

#nameAux {
  position: relative;
  top: -62px;
  margin: 0px;
}

#ourartists {
  margin: 0px;
  justify-items: flex-end;
}

.arrows {
  display: flex;
  grid-column: 3/3;
  grid-row: 3/3;
  justify-content: space-between;
}

.arrow {
  transition: opacity 0.3s linear;
}

.inactive {
  opacity: 0.3;
}

.active:hover {
  cursor: pointer;
}

#prev {
  transform: scaleX(-1);
}

`;

export const Text = styled.div`
  grid-row: 2/2;
  grid-column: 3/3;

  h1 {
  padding-left: 129px;
  font-size: 44px;
  font-weight: 500;
  color: #0b0b0b;
  white-space: nowrap;
}

h2 {
  transition: opacity 0.3s linear;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
}

p {
  transition: opacity 0.3s linear;
  margin-top: -46px;
  font-family: "Barlow", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
}

#descriptionAux {
  position:relative;
  top:-60px;
  margin-bottom:-60px;
}

`;