import { readFile } from "fs/promises";
import { resolve } from "path";
import { Data } from "../types";

export const getData = async (): Promise<Data[]> => {
  /**
   * in test task there would be a POST request, 
   * though why it should be POST instead of GET is unclear
   * const data = await axios.post('http://test.test/?getbd')
   * return data;
   */

  const filePath = resolve(__dirname, '../../data.json');
  const data = await readFile(filePath, 'utf-8');
  return JSON.parse(data);
}