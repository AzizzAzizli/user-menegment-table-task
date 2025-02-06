export function currentTime() {
  const date = new Date();
  const time = `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
  return time.toString();
}
export function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 32 + 1)) + 32;
}

import * as XLSX from "xlsx";

export const exportToExcel = (jsonData, fileName = "data.xlsx") => {
  const worksheet = XLSX.utils.json_to_sheet(jsonData);

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  XLSX.writeFile(workbook, fileName);
};
