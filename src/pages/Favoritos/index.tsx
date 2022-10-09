import { Card, Flex, Grid, Heading, Image } from "@atmoutsourcing/siakit";

export function Favoritos(){
  return (
    <>
      <Grid columns={"1fr"} width={800} height={500} margin="auto" >
        <Flex direction="column" align="center" justify="center">
          <Heading>teste</Heading>
          <Image ratio={1.8} src="https://img.elo7.com.br/product/main/2677B46/big-poster-filme-homem-aranha-de-volta-ao-lar-lo13-90x60-cm-marvel.jpg" alt="teste"></Image>
        </Flex>
      </Grid>
    </>
  )
}