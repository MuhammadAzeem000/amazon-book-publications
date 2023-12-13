"use Client";

import { Flex, Text, Button } from '@radix-ui/themes';

export default function NavBar() {
    return (
        <Flex direction="column" gap="2">
            <Text>Hello from Radix Themes :)</Text>
            <Button>Let's go</Button>
        </Flex>
    )
}
