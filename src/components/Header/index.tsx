import { Button, Flex, Heading, Separator, Text } from "@atmoutsourcing/siakit";
import { Link } from "react-router-dom";

export function Header(): JSX.Element {
  return (
    <>
      <Flex  height={80} flex justify="space-around" align="center">
        
        <Link style={{ textDecoration: 'none'}} to="/">
          <Heading size="2xl">
            Prime Flix
          </Heading>
        </Link>

        <Link style={{ textDecoration: 'none'}} to="/favoritos">
          <Button type="button">
            Meus Filmes
          </Button>
        </Link>
      </Flex>

      <Separator/>
    </>
  )
}