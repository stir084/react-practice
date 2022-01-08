
import {useState, useEffect} from "react";

import {useParams} from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>그냥 Detail만 표현하지만 Movie.js처럼 디테일 화면 꾸밀 수 있습니당 안한 것 뿐이지.</h1>;
}

export default Detail;
