import { environment } from './../../../environments/environment';

export interface Dinosaur {
  name: string;
  imageSrcs: string[];
}

export const embryo: Dinosaur = {
  name: `Youngling`,
  imageSrcs: [
    `${environment.dinosaurImagesPath}/embryo${environment.dinosaurImagesExtension}`,
  ],
};

export const skeleton: Dinosaur = {
  name: `☠️ Dead`,
  imageSrcs: [
    `${environment.dinosaurImagesPath}/skeleton${environment.dinosaurImagesExtension}`,
  ],
};

export const age38: Dinosaur = {
  name: `Erikov vek`,
  imageSrcs: [
    `${environment.dinosaurImagesPath}/age38${environment.dinosaurImagesExtension}`,
  ],
};

export const dinosaurs: Dinosaur[] = [
  {
    name: `Allosaurus`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Allosaurus${environment.dinosaurImagesExtension}`,
      `${environment.dinosaurImagesPath}/Allosaurus2${environment.dinosaurImagesExtension}`,
    ],
  },
  {
    name: `Ankylosaurus`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Ankylosaurus${environment.dinosaurImagesExtension}`,
      `${environment.dinosaurImagesPath}/Ankylosaurus2${environment.dinosaurImagesExtension}`,
    ],
  },
  {
    name: `Archaeopteryx`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Archaeopteryx${environment.dinosaurImagesExtension}`,
      `${environment.dinosaurImagesPath}/Archaeopteryx2${environment.dinosaurImagesExtension}`,
    ],
  },
  {
    name: `Brachiosaurus`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Brachiosaurus${environment.dinosaurImagesExtension}`,
      `${environment.dinosaurImagesPath}/Brachiosaurus2${environment.dinosaurImagesExtension}`,
    ],
  },
  {
    name: `Compsognathus`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Compsognathus${environment.dinosaurImagesExtension}`,
    ],
  },
  {
    name: `Paralophosaurus`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Paralophosaurus${environment.dinosaurImagesExtension}`,
    ],
  },
  {
    name: `Pterodactyl`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Pterodactyl${environment.dinosaurImagesExtension}`,
      `${environment.dinosaurImagesPath}/Pterodactyl2${environment.dinosaurImagesExtension}`,
    ],
  },
  {
    name: `Spinosaurus`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Spinosaurus${environment.dinosaurImagesExtension}`,
    ],
  },
  {
    name: `Stegosaurus`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Stegosaurus${environment.dinosaurImagesExtension}`,
    ],
  },
  {
    name: `Triceratops`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Triceratops${environment.dinosaurImagesExtension}`,
      `${environment.dinosaurImagesPath}/Triceratops2${environment.dinosaurImagesExtension}`,
    ],
  },
  {
    name: `Tyrannosaurus Rex`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Tyrannosaurus Rex${environment.dinosaurImagesExtension}`,
      `${environment.dinosaurImagesPath}/Tyrannosaurus Rex2${environment.dinosaurImagesExtension}`,
      `${environment.dinosaurImagesPath}/Tyrannosaurus Rex3${environment.dinosaurImagesExtension}`,
    ],
  },
  {
    name: `Velociraptor`,
    imageSrcs: [
      `${environment.dinosaurImagesPath}/Velociraptor${environment.dinosaurImagesExtension}`,
    ],
  },
];
