import { Card, Flex, Grid, Heading, Image, Text } from "@atmoutsourcing/siakit";
import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from 'react-router-dom';
import { SeeMore } from "../../components/SeeMore";

import api from '../../services/api';

export function Filmes(){

  const { id } = useParams();
  const navigate = useNavigate();

  const [ filme, setFilme ] = useState({});
  const [ loading, setLoading ] = useState(true);

  useEffect(()=>{
    async function loadFilme(){
        await api.get(`/movie/${id}`,{
            params:{
                api_key: "8ee9ecf01c128d1c2153fb207a20e759",
                language: "pt-BR",
                }
                })
                .then((response)=>{
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(()=>{
                    console.log("Filme não encontrado!");
                    navigate("/", { replace: true })
                })
                }
                    loadFilme();
                }, [navigate, id])

            


  return (
    <Flex justify="center">
    <Grid columns="600px" margin={50}>
      <Card direction="column" align="center">
        <Heading>
          {filme.title}
        </Heading>
        <Image ratio={2} alt="poster do filme" src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}/>
        <Text align="center">{filme.overview}</Text>
        </Card>
    </Grid>
    </Flex>
  )
}