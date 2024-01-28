'use server';

import fs from "fs";
import path from "path";

export const getMdContent = async (filename: string) => {
  const filePath = path.resolve(process.cwd(), `src/markdown/${filename}`);
  return fs.readFileSync(filePath, 'utf-8');
}
