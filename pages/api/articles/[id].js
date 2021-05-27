import { articles } from "../../../data";

// Custom API route for specific article. Can perform db operations here. inside it should have multiple methods within if or switch case

export default function handler({ query: { id } }, res) {
  const filtered = articles.filter((article) => article.id == id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Article with id ${id} not found` });
  }
}
