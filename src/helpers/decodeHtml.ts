import parse from "html-react-parser";
export const decodeHtml = (val: string) => parse(val);
