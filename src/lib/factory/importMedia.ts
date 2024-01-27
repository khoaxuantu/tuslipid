"use server";

import fs from "fs";

export type mediaMap = Record<string, string>;

/**
 * @param mediaSubPath A media directory subpath "/images/directory"
 *
 * @method get() Return an object of media path
 *
 * @return {mediaMap} object {media's name: "media/sub/path/file"}
 */
class ImportMedia {
  private mediaSubPath: string;

  public constructor(mediaSubPath: string) {
    this.mediaSubPath = mediaSubPath;
  }

  public get() {
    const tmp = this.getFilePaths().reduce((media: mediaMap, file: string) => {
      const key = file.substring(
        file.lastIndexOf("/") + 1,
        file.lastIndexOf(".")
      );
      media[key] = this.mediaSubPath + file;
      return media;
    }, {});
    return tmp;
  }

  private getFilePaths() {
    return fs.readdirSync(process.env.PUBLIC_PATH + this.mediaSubPath);
  }
}

const reqImgs = "/images/projects/";
export const getImgs = async () => {
  return new ImportMedia(reqImgs).get();
};

const reqSvgs = "/images/icons/";
export const getSvgs = async () => {
  return new ImportMedia(reqSvgs).get();
};

const reqEduImgs = "/images/edu/";
export const getEduImgs = async () => {
  return new ImportMedia(reqEduImgs).get();
};

export default ImportMedia;
