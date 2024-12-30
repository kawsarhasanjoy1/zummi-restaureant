export interface BlogType {
  _id: number | string;
  title: string;
  description: string;
  category: string;
  date: string; // Use a more specific `Date` type if you parse it as a JavaScript Date object.
  image: string;
}
