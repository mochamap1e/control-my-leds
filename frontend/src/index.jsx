import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const domRoot = document.getElementById("root");
const reactRoot = createRoot(domRoot);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
)