import "./App.css";

import LeftPane from "@components/Panes/Left";
import RightPane from "@components/Panes/Right";

export default function App() {
  return (
    <div className="grid grid-cols-[25vw_1fr] w-full h-screen">
      <LeftPane />
      <RightPane />
    </div>
  )
}