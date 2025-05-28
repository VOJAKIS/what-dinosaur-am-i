import { environment } from './../../../environments/environment';

export interface Dinosaur {
  name: string;
  imageSrcs: string[];
}

export const embryo: Dinosaur = {
  name: `Youngling`,
  imageSrcs: [`${environment.dinosaurImagesPath}/embryo.jpg`],
};

export const skeleton: Dinosaur = {
  name: `☠️ Dead`,
  imageSrcs: [`${environment.dinosaurImagesPath}/skeleton.jpg`],
};

export const age38: Dinosaur = {
  name: `Erikov vek`,
  imageSrcs: [`${environment.dinosaurImagesPath}/age38.jpg`],
};

export const dinosaurs: Dinosaur[] = [
  {
    name: `Allosaurus`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Allosaurus.jpg`,
      `${environment.dinosaurImagesPath}/Allosaurus2.jpg`,
    ],
  },
  {
    name: `Ankylosaurus`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Ankylosaurus.jpg`,
      `${environment.dinosaurImagesPath}/Ankylosaurus2.jpg`,
    ],
  },
  {
    name: `Archaeopteryx`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Archaeopteryx.jpg`,
      `${environment.dinosaurImagesPath}/Archaeopteryx2.jpg`,
    ],
  },
  {
    name: `Brachiosaurus`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Brachiosaurus.jpg`,
      `${environment.dinosaurImagesPath}/Brachiosaurus2.jpg`,
    ],
  },
  {
    name: `Compsognathus`,
    imageSrcs: [`${environment.dinosaurImagesPath}/Compsognathus.jpg`],
  },
  {
    name: `Paralophosaurus`,
    imageSrcs: [`${environment.dinosaurImagesPath}/Paralophosaurus.jpg`],
  },
  {
    name: `Pterodactyl`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Pterodactyl.jpg`,
      `${environment.dinosaurImagesPath}/Pterodactyl2.jpg`,
    ],
  },
  {
    name: `Spinosaurus`,
    imageSrcs: [`${environment.dinosaurImagesPath}/Spinosaurus.jpg`],
  },
  {
    name: `Stegosaurus`,
    imageSrcs: [`${environment.dinosaurImagesPath}/Stegosaurus.jpg`],
  },
  {
    name: `Triceratops`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Triceratops.jpg`,
      `${environment.dinosaurImagesPath}/Triceratops2.jpg`,
    ],
  },
  {
    name: `Tyrannosaurus Rex`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Tyrannosaurus Rex.jpg`,
      `${environment.dinosaurImagesPath}/Tyrannosaurus Rex2.jpg`,
      `${environment.dinosaurImagesPath}/Tyrannosaurus Rex3.jpg`,
    ],
  },
  {
    name: `Velociraptor`,
    imageSrcs: [`${environment.dinosaurImagesPath}/Velociraptor.jpg`],
  },
];
