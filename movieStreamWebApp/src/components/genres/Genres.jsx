import React from 'react';
import { useSelector } from 'react-redux';

import "./genres_style.scss";

const Genres = ({ data }) => {
  const {genres} = useSelector((state) => state.home);
  
  return (
    <div className="genres">
        {data?.map((item) =>  {
            if(!genres[item]?.name) return;
            return (
                <div key={item} className="genre">
                    {genres[item]?.name}
                </div>
            )
        })}
    </div>
  )
}

export default Genres;
