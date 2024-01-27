'use server';

import fs from "fs";

export type mediaMap = Record<string, string>;

/**
 * @param mediaDir A media directory PUBLIC_URL + "/image/directory"
 *
 * @method get() Return an object of media path
 *
 * @return {mediaMap} object {media's name: file path}
 */
class ImportMedia {
  private mediaDir: string;

  public constructor(mediaDir: string) {
    this.mediaDir = mediaDir;
  }

  public get() {
    const tmp = this.getFilePaths().reduce((media: mediaMap, file: string) => {
      const key = file.substring(
        file.lastIndexOf("/") + 1,
        file.lastIndexOf(".")
      );
      media[key] = file;
      return media;
    }, {});
    return tmp;
  }

  private getFilePaths() {
    return fs.readdirSync(this.mediaDir);
  }
}

const reqImgs = process.env.PUBLIC_URL + "/images/projects";
export const imgs = new ImportMedia(reqImgs).get();
console.log("🚀 ~ imgs:", imgs)

const reqSvgs = process.env.PUBLIC_URL + "/images/icons";
export const svgs = new ImportMedia(reqSvgs).get();

export default ImportMedia;
