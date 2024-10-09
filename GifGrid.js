import {useEffect} from "react";
//esto va en la carpeta components karol 2221343
export cont GifGrid=({category}) =>{
  useEffect(()=>{
    console.log(category);
  },[])
  return(
    <>
    <h3> {category] </h3>
    <p> Hola mundo</p>
    </>
  )
}


/*
// Función asíncrona para obtener GIFs desde la API de Giphy
const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=sZrnl8he4SYDQ7yXFDpoOT355nvqK2KR&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    });
  
    // Retornamos el array de GIFs
    return gifs;
  };



export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
    };
  
    // useEffect para ejecutar getImages cuando el componente se monta o cuando cambia la categoría
    useEffect(() => {
      getImages();
    }, [category]);
  
    // Retorna el JSX para renderizar la grilla de GIFs
    return (
      <div>
        <h3> {category} </h3>
        <div className="card-grid">
          {images.map((image, key) => (
            <GifItem key={key} {...image} />
          ))}
        </div>
      </div>
    );
  };

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './Gifitem';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3> {category} </h3>
      <div className="card-grid">
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          images.map((image, key) => (
            <GifItem key={key} {...image} />
          ))
        )}
      </div>
    </>
  );
};*/

