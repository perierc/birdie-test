import { Flex } from "@mantine/core";

export default function BodyContainerCenter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{ height: "100%", width: "85%", float: "right" }}
    >
      {children}
    </Flex>
  );
}
