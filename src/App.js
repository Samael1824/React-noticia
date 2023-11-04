import React, { Component } from 'react';

//componentes propios
import Header from './components/Header';
import Noticias from './components/Noticias';

class App extends Component {

  //estado donde meto las cuestiones en un array
  state = {
    noticias : []
  }

  componentDidMount(){
    this.consultaNoticias();
  }

  consultaNoticias = () => {
    let url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7f43e6a0821d4f5b8c1d3161a25e0c98'
  
    fetch(url)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(noticias => {
      //aqui almaceno la informacion
      this.setState({
        noticias: noticias.articles
      })
    })
  }


  render() {
    return(
      <div>
        <Header />
        <div className='container'>
        <Noticias 
          noticias={
            this.state.noticias
          }
        />
        </div>
      </div>
    )
  }
}

export default App;
