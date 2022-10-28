import './App.css'; 
import { useEffect, useState } from 'react';


function App() {
  const apiUrlDolar = 'https://apiarg.herokuapp.com/api/dolarblue';
  const apiUrlETH = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';
  const [priceDolar, setPriceDolar] = useState()
  const [priceETH, setPriceETH] = useState()
  const fetchApi = async () => {

    const responseDolar = await fetch(apiUrlDolar)
    const responseETH = await fetch(apiUrlETH)

    const resDolarJSON = await responseDolar.json()
    const resEthJSON = await responseETH.json()
    setPriceDolar(resDolarJSON)
    setPriceETH(resEthJSON)

    console.log("===========")
    console.log(resDolarJSON)
    console.log(resEthJSON)
  }
  useEffect(() =>{
    fetchApi()
  }, [])
  var testarudo = "NO"
  function test(){
    testarudo = new Date().toLocaleTimeString()
  }
  test()

  setInterval(test, 1000)
  return (
    <div className="App">
      {!priceDolar ?'NO' :priceDolar.compra }
      <hr></hr>
      {!priceETH ?'NO' :priceETH.USD }
      <hr></hr>
      {testarudo}
    </div>
  );
}
export default App;

