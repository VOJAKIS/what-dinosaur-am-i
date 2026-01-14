import { getImagePath } from '../functions/path';

export interface Dinosaur {
  name: string;
  imageSrcs: string[];
}

export const embryo: Dinosaur = {
  name: `Youngling`,
  imageSrcs: [getImagePath(`embryo`)],
};

export const skeleton: Dinosaur = {
  name: `☠️ Dead`,
  imageSrcs: [getImagePath(`skeleton`)],
};

export const age38: Dinosaur = {
  name: `Erikov vek`,
  imageSrcs: [getImagePath(`age38`)],
};

export const dinosaurs: Dinosaur[] = [
  {
    name: `Allosaurus`,
    imageSrcs: [getImagePath(`Allosaurus`), getImagePath(`Allosaurus2`)],
  },
  {
    name: `Ankylosaurus`,
    imageSrcs: [getImagePath(`Ankylosaurus`), getImagePath(`Ankylosaurus2`)],
  },
  {
    name: `Archaeopteryx`,
    imageSrcs: [getImagePath(`Archaeopteryx`), getImagePath(`Archaeopteryx2`)],
  },
  {
    name: `Brachiosaurus`,
    imageSrcs: [getImagePath(`Brachiosaurus`), getImagePath(`Brachiosaurus2`)],
  },
  {
    name: `Compsognathus`,
    imageSrcs: [getImagePath(`Compsognathus`)],
  },
  {
    name: `Paralophosaurus`,
    imageSrcs: [getImagePath(`Paralophosaurus`)],
  },
  {
    name: `Pterodactyl`,
    imageSrcs: [getImagePath(`Pterodactyl`), getImagePath(`Pterodactyl2`)],
  },
  {
    name: `Spinosaurus`,
    imageSrcs: [getImagePath(`Spinosaurus`)],
  },
  {
    name: `Stegosaurus`,
    imageSrcs: [getImagePath(`Stegosaurus`)],
  },
  {
    name: `Triceratops`,
    imageSrcs: [getImagePath(`Triceratops`), getImagePath(`Triceratops2`)],
  },
  {
    name: `Tyrannosaurus Rex`,
    imageSrcs: [
      getImagePath(`Tyrannosaurus Rex`),
      getImagePath(`Tyrannosaurus Rex2`),
      getImagePath(`Tyrannosaurus Rex3`),
    ],
  },
  {
    name: `Velociraptor`,
    imageSrcs: [getImagePath(`Velociraptor`)],
  },
];
