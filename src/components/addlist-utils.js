import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import { store } from './../index';
const cardStyle = {
  width: '20%',
  height: 'auto',
};
class AddMount extends Component {
  render() {
    return (
      <>
        <div className="card card-apoyo m-2 bg-secondary" style={cardStyle}>
          <img className="card-img-top" src={store.getState().adList.results[this.props.counter].photo} alt={store.getState().adList.results[this.props.counter].name} />
          <div className="card-body">
            <h2 className="card-title">{store.getState().adList.results[this.props.counter].name}</h2>
            <p className="card-text">Precio: {store.getState().adList.results[this.props.counter].price}</p>
            <Link to={`/ads/${store.getState().adList.results[this.props.counter]._id}`}><p className="btn btn-info">Detalle</p></Link>
          </div>
        </div>
      </>
    )
  }
}

class AddMount3 extends Component {
  render() {
    return null;
  }
}

function RenderOrNot(props) {
  const callDo = props.callDo;
  let toShow = [];
  if (callDo) {
    for (let i = 0; i < store.getState().adList.count; i++) {
      toShow.push(<AddMount key={i} counter={i} />);
    }
    return (
      <div className="mx-auto anuncios d-flex flex-wrap justify-content-around mt-0 bg-dark">
        {toShow}
      </div>
    )
  }
  return <AddMount3 />;
}

function createQueryString(name, sellOrBuy, tags, priceMin, priceMax) {
  let queryString = '';
  if (name !== '') {
    queryString = '?name=' + name;
  }
  if (sellOrBuy !== '') {
    if (sellOrBuy === 'sell') {
      if (queryString === '') {
        queryString = '?venta=true';
      }
      else {
        queryString = queryString + '&venta=true';
      }
    }
    else if (sellOrBuy === 'buy') {
      if (queryString === '') {
        queryString = '?venta=false';
      }
      else {
        queryString = queryString + '&venta=false';
      }
    }
  }
  if (tags !== '') {
    if (queryString === '') {
      queryString = '?tag=' + tags;
    }
    else {
      queryString = queryString + '&tag=' + tags;
    }
  }
  if (priceMin !== '' || priceMax !== '') {
    if (queryString === '') {
      if (priceMin < priceMax) {
        queryString = '?price=' + priceMin + '-' + priceMax;
      }
      else {
        queryString = '?price=' + priceMax + '-' + priceMin;
      }
    }
    else {
      if (priceMin < priceMax) {
        queryString = queryString + '&price=' + priceMin + '-' + priceMax;
      }
      else {
        queryString = queryString + '&price=' + priceMax + '-' + priceMin;
      }
    }
  }
  return queryString;
}
export { RenderOrNot, createQueryString };