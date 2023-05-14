import csv from 'csv-parser';
import fs from 'fs';
import type IProducts from '../interfaces/products.interface';

const csvImporter = async (filePath: string): Promise<IProducts[]> => {
  return await new Promise((resolve, reject) => {
    const results: IProducts[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: IProducts) => {
        results.push(data);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

export default csvImporter;
