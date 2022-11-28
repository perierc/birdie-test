import {
  Navbar,
  Image,
  Divider,
  Center,
  Title,
  Loader,
  NavLink,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import logo from "../assets/birdie.png";

interface SidebarProps {
  selectedRecipientId: string | null;
  setSelectedRecipientId: (id: string | null) => void;
  selectedView: string;
  setSelectedView: (id: string) => void;
}

interface Recipient {
  care_recipient_id: string;
}

const fetchRecipients = async () => {
  const response = await fetch("http://localhost:8000/api/recipients");
  return response.json();
};

export default function Sidebar({
  selectedRecipientId,
  setSelectedRecipientId,
  selectedView,
  setSelectedView,
}: SidebarProps) {
  const { isLoading, isError, data, error } = useQuery(
    ["recipients"],
    fetchRecipients
  );

  return (
    <Navbar p="xs" width={{ base: 300 }}>
      <Navbar.Section m="xs">
        <Center>
          <Image src={logo} alt="Birdie logo" width={130}></Image>
        </Center>
      </Navbar.Section>
      <Divider />
      <Navbar.Section m="xs">
        <Title order={4} color="dimmed" m="md">
          CARE RECIPIENTS
        </Title>
        {isLoading && (
          <Center>
            <Loader />
          </Center>
        )}
        {isError && error instanceof Error && <div>Error: {error.message}</div>}
        {data &&
          data.results.map((recipient: Recipient, i: number) => {
            return (
              <NavLink
                key={recipient.care_recipient_id}
                label={`Recipient n°${i + 1}`}
                active={recipient.care_recipient_id === selectedRecipientId}
                onClick={() =>
                  setSelectedRecipientId(recipient.care_recipient_id)
                }
              ></NavLink>
            );
          })}
      </Navbar.Section>
      <Navbar.Section m="xs">
        <Title order={4} color="dimmed" m="md">
          VIEWS
        </Title>
      </Navbar.Section>
    </Navbar>
  );
}
