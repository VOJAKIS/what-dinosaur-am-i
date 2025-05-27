import { config } from '../config';

export interface Dinosaur {
  name: string;
  imageSrcs: string[];
}

export const dinosaurs: Dinosaur[] = [
  {
    name: `Tyrannosaurus Rex`,
    imageSrcs: [`${config.dinosaurImagesPath}/Tyrannosaurus Rex.jpg`],
  },
  {
    name: `Triceratops`,
    imageSrcs: [`${config.dinosaurImagesPath}/Triceratops.jpg`],
  },
  {
    name: `Velociraptor`,
    imageSrcs: [`${config.dinosaurImagesPath}/Velociraptor.jpg`],
  },
  {
    name: `Stegosaurus`,
    imageSrcs: [`${config.dinosaurImagesPath}/Stegosaurus.jpg`],
  },
  {
    name: `Brachiosaurus`,
    imageSrcs: [`${config.dinosaurImagesPath}/Brachiosaurus.jpg`],
  },
  {
    name: `Spinosaurus`,
    imageSrcs: [`${config.dinosaurImagesPath}/Spinosaurus.jpg`],
  },
  {
    name: `Allosaurus`,
    imageSrcs: [`${config.dinosaurImagesPath}/Allosaurus.jpg`],
  },
  {
    name: `Archaeopteryx`,
    imageSrcs: [`${config.dinosaurImagesPath}/Archaeopteryx.jpg`],
  },
  {
    name: `Ankylosaurus`,
    imageSrcs: [`${config.dinosaurImagesPath}/Ankylosaurus.jpg`],
  },
  {
    name: `Compsognathus`,
    imageSrcs: [`${config.dinosaurImagesPath}/Compsognathus.jpg`],
  },
];
