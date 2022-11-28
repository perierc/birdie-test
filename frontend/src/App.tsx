import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [selectedRecipientId, setSelectedRecipientId] = useState<string | null>(
    null
  );
  const [selectedView, setSelectedView] = useState<string>("timeline");

  return (
    <div style={{ background: "#f5f5f5" }}>
      <Sidebar
        selectedRecipientId={selectedRecipientId}
        setSelectedRecipientId={setSelectedRecipientId}
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />
    </div>
  );
}

export default App;
