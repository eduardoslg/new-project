import { Empty, Flex, Heading, Spinner, useLoading, Image, Text, Button, Separator, toast, Card, Grid } from "@atmoutsourcing/siakit";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { SeeMore } from "../../components/SeeMore";
import api from "../../services/api";

export function Home(){

  const [ filmes, setFilmes ] = useState<any[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ page, setPage ] = useState(1);
  

  useEffect(() => {

    async function loadFilmes(){
      await api.get("/movie/now_playing", {
        params: {
          api_key: "8ee9ecf01c128d1c2153fb207a20e759",
          language: "pt-BR",
          page,
        }
      })
      .then((res) => {
        const response = res.data.results.slice(0, 10)
        setFilmes(response)
        setLoading(false)
      })
      .catch((error) => {
        toast.danger({ title: "erro!", text: `${error}`})
      })
    }

    loadFilmes();
  }, [page])

  function handlePage(action: string){
    setPage(action === 'back' ? page - 1 : page + 1 )
  }

  return (

    <Flex direction="column" flex justify="center" align="center">
      {loading ? (
        <Flex flex height="600px" align="center" justify="center" margin="150px"> 
          <Empty title="Carregando..." description="Sua internet está lenta, aguarde mais um pouco..."/>
        </Flex>
      ) : (
        <>
        {filmes.map((filme) => {
          return (
            <Grid columns="600px" height={400} margin={30}>
              <Card direction="column" align="center" justify="space-between">
                <Heading>
                  {filme.title}
                </Heading>
                <Image ratio={2} alt="poster do filme" src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} />
                <Link to={`/filme/${filme.id}`}>
                  <SeeMore title="Ver mais"/>
                </Link>
              </Card>
            </Grid>
            )
            })}

            <Separator/>

            <Flex height={100} width={800} align="center" justify="space-between" >
              <Button type="button" onClick={()=> handlePage('back') } disabled={page < 2}>
                Voltar
              </Button>

              <Button type="button" onClick={()=> handlePage('next') }>
                Proxima
              </Button>
            </Flex>
        </>
      )}
    </Flex>
  )
}