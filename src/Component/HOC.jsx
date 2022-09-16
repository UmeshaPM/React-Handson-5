import React from 'react';

const products = [
  {productName: 'Realme C31', price: 8500},
  {productName: 'OnePlus 10R 5G', price: 38999},
  {productName: 'Samsung Galaxy M53 5G', price: 23999},
  {productName: 'Redmi Note 11T 5G', price: 19999},
  {productName: 'Vivo Y21G', price: 12990},
  {productName: 'Oppo A54', price: 10990},
  {productName: 'realme narzo 50i', price: 8498},
]

const withSearch = (WrappedComponent) => {
  class SearchFuctionality extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        search: ''
      }
    }

    updateSearch = (e) => {
      this.setState({search:e.target.value})
    }

    filterProducts = () => {
      return products.filter(product => product.productName.toLowerCase().includes(this.state.search));
    }

    render() {
      const updatedProducts = this.filterProducts();
      return(
        <div>
          <input type="text" onChange={this.updateSearch} />
          <WrappedComponent products={updatedProducts}/>
        </div>
      )
    }
  }

  return SearchFuctionality;
}

export default withSearch;