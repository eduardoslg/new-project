<<<<<<< Updated upstream
import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom';

import api from '../../services/api';
=======
import { Grid } from "@atmoutsourcing/siakit";
>>>>>>> Stashed changes

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


                return () =>{
                    console.log("Componente foi desmontado!");
                }
            }, [navigate, id])



  return (
    <>
      <Grid columns={"fr"}>
        <p>teste</p>
      </Grid>
    </>
  )
}