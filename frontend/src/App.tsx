import { useState } from "react";
import { AppShell, Title, Flex } from "@mantine/core";
import BodyContainerCenter from "./components/BodyContainerCenter";
import Sidebar from "./components/Sidebar";
import TimelineView from "./components/Views/TimelineView";
import TableView from "./components/Views/TableView";

function App() {
  const [selectedRecipientId, setSelectedRecipientId] = useState<string | null>(
    null
  );
  const views = [{ label: "Timeline" }, { label: "Table" }];
  const [selectedView, setSelectedView] = useState<string>(views[0].label);

  return (
    <AppShell
      navbar={
        <Sidebar
          selectedRecipientId={selectedRecipientId}
          setSelectedRecipientId={setSelectedRecipientId}
          selectedView={selectedView}
          setSelectedView={setSelectedView}
          views={views}
        />
      }
    >
      {!selectedRecipientId && (
        <BodyContainerCenter>
          <Title>Choose a care recipient</Title>
        </BodyContainerCenter>
      )}
      {selectedRecipientId &&
        (selectedView === "Timeline" ? (
          <TimelineView selectedRecipientId={selectedRecipientId} />
        ) : (
          <TableView selectedRecipientId={selectedRecipientId} />
        ))}
    </AppShell>
  );
}

export default App;
