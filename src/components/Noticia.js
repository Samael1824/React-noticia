import React from "react";

const Noticia = (props) => {
    
    const {url, author, title, urlToImage, content} = props.noticia;
    return(
        <div className="col-md-4">
            <div className="card h-80 mb-5">
                <img src={urlToImage} className="card-img-top"/>
                <span className="card-title">{author}</span>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <a href={url} className="btn btn-primary">Leer mas</a>
                </div>
            </div>
        </div>
    )
}

export default Noticia;