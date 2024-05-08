import { useEffect, useState } from "react";

const Tile = ({name, img, alt}) => {
    return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        border: "1px solid black",
        borderRadius: "8px",
        padding: "10px",
        marginLeft: "10px",
        marginTop :"10px"
    }}>
        <img src={img} alt={alt} style={{width: "100px", height: "100px"}}/>
        <h3>{name}</h3>
    </div>
    )
}

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const fetchCountries = async () => {
        try {
            const result = await fetch("https://restcountries.com/v3.1/all");
            const data = await result.json();
            setCountries(data);
            return data;
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(()=> {
        fetchCountries();
    }, []);

    console.log(countries);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            margin: "10px"
        }}>
            {countries.map((country, idx) => <Tile key={idx} name={country.name.common} img={country.flags.png} alt={country.flags.alt}/>)}
        </div>
    )
}

export default Countries;