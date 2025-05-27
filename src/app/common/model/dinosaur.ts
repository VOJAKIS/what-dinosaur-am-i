import { config } from '../config';

export interface Dinosaur {
  name: string;
  imageSrcs: string[];
}

export const embryo: Dinosaur = {
  name: `Youngling`,
  imageSrcs: [`${config.dinosaurImagesPath}/embryo.jpg`],
};

export const skeleton: Dinosaur = {
  name: `☠️ Dead`,
  imageSrcs: [`${config.dinosaurImagesPath}/skeleton.jpg`],
};

export const age38: Dinosaur = {
  name: `Erikov vek`,
  imageSrcs: [`${config.dinosaurImagesPath}/age38.jpg`],
};

export const dinosaurs: Dinosaur[] = [
  {
    name: `Allosaurus`,
    imageSrcs: [
      `${config.dinosaurImagesPath}/Allosaurus.jpg`,
      `${config.dinosaurImagesPath}/Allosaurus2.jpg`,
    ],
  },
  {
    name: `Ankylosaurus`,
    imageSrcs: [
      `${config.dinosaurImagesPath}/Ankylosaurus.jpg`,
      `${config.dinosaurImagesPath}/Ankylosaurus2.jpg`,
    ],
  },
  {
    name: `Archaeopteryx`,
    imageSrcs: [
      `${config.dinosaurImagesPath}/Archaeopteryx.jpg`,
      `${config.dinosaurImagesPath}/Archaeopteryx2.jpg`,
    ],
  },
  {
    name: `Brachiosaurus`,
    imageSrcs: [
      `${config.dinosaurImagesPath}/Brachiosaurus.jpg`,
      `${config.dinosaurImagesPath}/Brachiosaurus2.jpg`,
    ],
  },
  {
    name: `Compsognathus`,
    imageSrcs: [`${config.dinosaurImagesPath}/Compsognathus.jpg`],
  },
  {
    name: `Paralophosaurus`,
    imageSrcs: [`${config.dinosaurImagesPath}/Paralophosaurus.jpg`],
  },
  {
    name: `Pterodactyl`,
    imageSrcs: [
      `${config.dinosaurImagesPath}/Pterodactyl.jpg`,
      `${config.dinosaurImagesPath}/Pterodactyl2.jpg`,
    ],
  },
  {
    name: `Spinosaurus`,
    imageSrcs: [`${config.dinosaurImagesPath}/Spinosaurus.jpg`],
  },
  {
    name: `Stegosaurus`,
    imageSrcs: [`${config.dinosaurImagesPath}/Stegosaurus.jpg`],
  },
  {
    name: `Triceratops`,
    imageSrcs: [
      `${config.dinosaurImagesPath}/Triceratops.jpg`,
      `${config.dinosaurImagesPath}/Triceratops2.jpg`,
    ],
  },
  {
    name: `Tyrannosaurus Rex`,
    imageSrcs: [
      `${config.dinosaurImagesPath}/Tyrannosaurus Rex.jpg`,
      `${config.dinosaurImagesPath}/Tyrannosaurus Rex2.jpg`,
      `${config.dinosaurImagesPath}/Tyrannosaurus Rex3.jpg`,
    ],
  },
  {
    name: `Velociraptor`,
    imageSrcs: [`${config.dinosaurImagesPath}/Velociraptor.jpg`],
  },
];
