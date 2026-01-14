import { environment as env } from '../../../environments/environment';

export const getImagePath = (imageFileName: string) => {
  return `${env.dinosaurImagesPath}/${imageFileName}.${env.dinosaurImagesExtension}`;
};
