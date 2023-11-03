import { useEffect, useState } from "react";
import { createComment } from "../../services/requests";
import { AutorComentario, BotaoCondicional, ComentarioContainer, ComentarioDoAutor, ContainerCurtir, ContainerItem, InputComentar } from "./style";
import Curtir from "../Curtir/Curtir";


const Comentar = ([postId, comments, autorId]) => {

   const [novocomentario, setNovoComentario] = useState('')
   const [comentarios, setComentarios] = useState([])
   const [mostrarComentarios, setMostrar] = useState(false)
   
   const adicionarComentario = ()=>{
    if(novocomentario.trim() !== ''){
        createComment(postId,novocomentario)
        setComentarios(...comments, novocomentario)
        setNovoComentario('')
    }
   }

    return (

        <>

         
             

            
        </>
    )
}

export default Comentar