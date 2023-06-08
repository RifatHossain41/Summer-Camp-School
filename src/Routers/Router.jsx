import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div><button className="btn">Button</button>
    <button className="btn btn-neutral">Neutral</button>
    <button className="btn btn-primary">Button</button>
    <button className="btn btn-secondary">Button</button>
    <button className="btn btn-accent">Button</button>
    <button className="btn btn-ghost">Button</button>
    <button className="btn btn-link">Button</button></div>,
  },
]);

