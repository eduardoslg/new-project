import { Flex, Grid } from "@atmoutsourcing/siakit";

export function TelaSecundaria(): JSX.Element {
  return (
    <>
    <div style={{ backgroundColor: 'tomato', flex: 1, width: "100%", height: '100vh'}}>
      <Grid gap columns={'1fr 1fr 1fr'}>
        <Flex align="center" justify="space-around">
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </Flex>
        <Flex align="center" justify="space-around">
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </Flex>
        <Flex align="center" justify="space-around">
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </Flex>
      </Grid>
    </div>
    </>
  )
}