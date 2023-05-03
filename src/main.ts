import { createRoot } from "react-dom/client";
import { RootComponent } from "./component/root";
import { createElement } from "react";

const container = document.body.appendChild(document.createElement("div"));
const root = createRoot(container);

root.render(createElement(RootComponent));
