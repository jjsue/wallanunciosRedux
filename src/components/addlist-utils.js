import React, { Component } from 'react';
import { BrowserRouter as Link} from "react-router-dom";
class AddMount extends Component{
    render(){
      return(
        <>
        <div className="Anuncio">
          <Link to={`/ads/${this.props.data._id}`}><h2>{this.props.data.name}</h2></Link>
          <img src={this.props.data.photo} alt={this.props.data.name}/> 
          <p>Precio: {this.props.data.price}</p>
          <p>{this.props.data.type}</p>
        </div>
        </>
      )
    }
}
  
class AddMount3 extends Component{
  render(){
    return null;
  }
}
  
function RenderOrNot(props) {
  const callDo = props.callDo;
  let toShow = [];
  if (callDo) {
    for (let i=0; i<props.data.count; i++){
      toShow.push(<AddMount key = {i} data = {props.data.results[i]}/>);
    }
    return(
    <div className="Anuncios">
      {toShow}
    </div>
    )
  }
  return <AddMount3 />;
}

function createQueryString(name, sellOrBuy, tags, priceMin, priceMax){
  let queryString = '';
  if(name !== ''){
    queryString = '?name=' + name;
  }
  if(sellOrBuy !== ''){
    if(sellOrBuy === 'sell'){
      if (queryString === ''){
        queryString = '?venta=true';
      }
      else{
        queryString = queryString + '&venta=true';
      }
    }
    else if(sellOrBuy === 'buy'){
      if (queryString === ''){
        queryString = '?venta=false';
      }
      else{
        queryString = queryString + '&venta=false';
      }
    }
  }
  if (tags !==''){
    if(queryString === ''){
      queryString = '?tag=' + tags;
    }
    else{
      queryString = queryString + '&tag=' + tags;
    }
  }
  if (priceMin !== '' || priceMax !==''){
    if (queryString === ''){
      if(priceMin < priceMax){
        queryString = '?price=' + priceMin + '-' + priceMax;
      }
      else{
        queryString = '?price=' + priceMax + '-' + priceMin;
      }
    }
    else{
      if(priceMin < priceMax){
        queryString = queryString + '&price=' + priceMin + '-' + priceMax;
      }
      else{
        queryString = queryString + '&price=' + priceMax + '-' + priceMin;
      }
    }
  }
  return queryString;
}
export {RenderOrNot, createQueryString};