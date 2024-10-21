import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate"; //provides searchable dropdown with async loading and paginate
import { geoApiURL, geoApiOptions } from "../../api";


const Search = ({onSearchChange}) => {
    
    //search holds the current value of the search
    //setSearch updates the search state
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(
            `${geoApiURL}/cities?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions)
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude}, ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            })
            .catch((err) => console.error(err));
    };

    //updates search state with new searchData
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;