import { Title, Loader, List, Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import BodyContainerCenter from "../BodyContainerCenter";
import BodyContainer from "../BodyContainer";
import { Event } from "../../assets/interfaces";
import { sentenceCase } from "sentence-case";

interface TableViewProps {
  selectedRecipientId: string;
}

export default function TableView({ selectedRecipientId }: TableViewProps) {
  const fetchRecipientEvents = async () => {
    const response = await fetch(
      `http://localhost:8000/api/recipients/${selectedRecipientId}/events`
    );
    return response.json();
  };

  const { isLoading, isError, data, error } = useQuery(
    ["recipientEvents", selectedRecipientId],
    fetchRecipientEvents
  );

  const rows =
    data &&
    data.results.map((event: Event) => (
      <tr key={event.id}>
        <td>
          <b>{sentenceCase(event.event_type)}</b>
          <List>
            {Object.keys(JSON.parse(event.payload)).map((property: string) => {
              if (
                !["event_type", "timestamp"].includes(property) &&
                !property.includes("id") &&
                typeof JSON.parse(event.payload)[property] !== "object"
              ) {
                return (
                  <List.Item key={property}>
                    <b>{sentenceCase(property)}: </b>
                    {JSON.parse(event.payload)[property]}
                  </List.Item>
                );
              }
            })}
          </List>
        </td>
        <td>{event.timestamp}</td>
        <td>{event.caregiver_id}</td>
      </tr>
    ));

  if (isLoading)
    return (
      <BodyContainerCenter>
        <Loader />
      </BodyContainerCenter>
    );

  if (isError && error instanceof Error)
    return <BodyContainerCenter>Error: {error.message}</BodyContainerCenter>;

  return (
    <BodyContainer>
      <Title order={1} m="lg">
        Table of recent events
      </Title>
      <Table striped verticalSpacing="sm" fontSize="lg">
        <thead>
          <tr>
            <th>Event</th>
            <th>Timestamp</th>
            <th>Caregiver</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </BodyContainer>
  );
}
