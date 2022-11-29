import { Title, Loader, Text, Timeline } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import BodyContainerCenter from "../BodyContainerCenter";
import BodyContainer from "../BodyContainer";
import { sentenceCase } from "sentence-case";

interface TimelineViewProps {
  selectedRecipientId: string;
}

export default function TimelineView({
  selectedRecipientId,
}: TimelineViewProps) {
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
        Timeline of recent events
      </Title>
      <Timeline active={12}>
        {/* Mantine does not support the map function for Timeline.Item, so I had to hardcode the timeline without loop. */}
        <Timeline.Item
          key={data.results[0].id}
          title={sentenceCase(data.results[0].event_type)}
        >
          <Text color="dimmed">{data.results[0].timestamp}</Text>
        </Timeline.Item>
        <Timeline.Item
          key={data.results[1].id}
          title={sentenceCase(data.results[1].event_type)}
        >
          <Text color="dimmed">{data.results[1].timestamp}</Text>
        </Timeline.Item>
        <Timeline.Item
          key={data.results[2].id}
          title={sentenceCase(data.results[2].event_type)}
        >
          <Text color="dimmed">{data.results[2].timestamp}</Text>
        </Timeline.Item>
        <Timeline.Item
          key={data.results[3].id}
          title={sentenceCase(data.results[3].event_type)}
        >
          <Text color="dimmed">{data.results[3].timestamp}</Text>
        </Timeline.Item>
        <Timeline.Item
          key={data.results[4].id}
          title={sentenceCase(data.results[4].event_type)}
        >
          <Text color="dimmed">{data.results[4].timestamp}</Text>
        </Timeline.Item>
        <Timeline.Item
          key={data.results[5].id}
          title={sentenceCase(data.results[5].event_type)}
        >
          <Text color="dimmed">{data.results[5].timestamp}</Text>
        </Timeline.Item>
        <Timeline.Item
          key={data.results[6].id}
          title={sentenceCase(data.results[6].event_type)}
        >
          <Text color="dimmed">{data.results[6].timestamp}</Text>
        </Timeline.Item>
        <Timeline.Item
          key={data.results[7].id}
          title={sentenceCase(data.results[7].event_type)}
        >
          <Text color="dimmed">{data.results[7].timestamp}</Text>
        </Timeline.Item>
        <Timeline.Item
          key={data.results[8].id}
          title={sentenceCase(data.results[8].event_type)}
        >
          <Text color="dimmed">{data.results[8].timestamp}</Text>
        </Timeline.Item>
        <Timeline.Item
          key={data.results[9].id}
          title={sentenceCase(data.results[9].event_type)}
        >
          <Text color="dimmed">{data.results[9].timestamp}</Text>
        </Timeline.Item>
        <Timeline.Item
          key={data.results[10].id}
          title={sentenceCase(data.results[10].event_type)}
        >
          <Text color="dimmed">{data.results[10].timestamp}</Text>
        </Timeline.Item>
        <Timeline.Item
          key={data.results[11].id}
          title={sentenceCase(data.results[11].event_type)}
        >
          <Text color="dimmed">{data.results[11].timestamp}</Text>
        </Timeline.Item>
        <Timeline.Item
          key={data.results[12].id}
          title={sentenceCase(data.results[12].event_type)}
        >
          <Text color="dimmed">{data.results[12].timestamp}</Text>
        </Timeline.Item>
      </Timeline>
    </BodyContainer>
  );
}
