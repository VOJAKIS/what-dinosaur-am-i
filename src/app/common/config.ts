export interface Config {
  maximumAgeYears: number;
  maximumAgeEverRecordedYears: number;
  dinosaurImagesPath: string;
}

export const config: Config = {
  maximumAgeYears: 63,
  maximumAgeEverRecordedYears: 122,
  dinosaurImagesPath: `images/dinosaurs`,
};
