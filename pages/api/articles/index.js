import { articles } from "../../../data";

// Custom API route. Can perform db operations here, can only have one default function. inside it should have multiple methods within if or switch case
export default function handler(req, res) {
  res.status(200).json(articles);
}
