import React, { Component } from "react";
import Noticia from "./Noticia";

class Noticias extends Component {
    render(){
        return(
           <div className="row gy-3">

            {/* this.props.Noticias  es para traer los item que es donde llega el array entonces se 
            se recorre con un map */}
            {this.props.noticias.map(noticia => (
                <Noticia
                key={noticia.url}
                noticia = {noticia}
                />
            ))}
           </div>
        )
    }
}

export default Noticias;