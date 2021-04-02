import { line } from "./line";
import { column } from "./column";

export function rectangle(width: number, height: number): string {
  line(width)
  return column(height,line(width))

}
