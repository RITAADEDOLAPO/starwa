import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { episode_id } = useParams()
  console.log(episode_id)

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [characters, setCharacters] = useState([])
    const [vehicles, setVehicles] = useState([]);

    

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films/${episode_id}`)
          setData(response.data);
          console.log(response.data)

          const characterData = await Promise.all(
            response.data.characters.map((url) =>
              axios.get(url).then((res) => res.data)
            )
          );
          setCharacters(characterData);

          const vehiclesData = await Promise.all(
            response.data.vehicles.map((url) =>
              axios.get(url).then((res) => res.data)
            )
          );
          setVehicles(vehiclesData);

        setError(null);
        console.log(response.data)
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  
return (
    <>
    <div>
     <p>More Info</p>
     
      <div>
        <h3>Characters</h3>
          <ul>
              {characters.map((character) => (
                <li key={character.url}>{character.name}</li>
              ))}
          </ul>
      </div>

      <div>
        <h3 >Vehicles</h3>
          <ul>
              {vehicles.map((vehicles) => (
                <li key={vehicles.url}>{vehicles.name}</li>
              ))}
          </ul>
      </div>
    </div>
    </>
  )
}

export default Details