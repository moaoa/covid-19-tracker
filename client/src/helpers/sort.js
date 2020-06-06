export default function sortCountries(countriesArray) {
    countriesArray.sort((a, b) => {
        if (a.Country > b.Country) return 1
        if (a.Country < b.Country) return -1
        return 0
    })
    console.log(countriesArray)

    return countriesArray
}
