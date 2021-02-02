async function getInfo(event){
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${event.currentTarget.id}`);
  const data = await res.json();

  return {
    name : data.translations.fr,
    nativeName : data.nativeName,
    capital : data.capital,
    flag : data.flag,
    population : data.population,
    area : data.area,
    currenciesName : data.currencies[0].name,
    currenciesSymbol : data.currencies[0].symbol
  }
}

export default {
  getInfo
}