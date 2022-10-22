import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const { data, loading, error } = useFetchGifs(category);

  console.log(data);

  return (
    <>
      <h3>{category}</h3>

      {loading && <h3>Loading...</h3>}

      {error && <h3>Error...</h3>}

      <div className="card-grid">
        {!loading && !error && data.map(({ id, title, images }) => (
          <GifItem
            key={id}
            id={id}
            title={title}
            url={images.downsized_medium.url}
          />
        ))}
      </div>

    </>
  )
}
