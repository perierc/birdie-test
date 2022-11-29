import { Flex } from "@mantine/core";

export default function BodyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      direction="column"
      align="center"
      style={{ height: "100%", width: "85%", float: "right" }}
    >
      {children}
    </Flex>
  );
}
