import React, {useState} from 'react';

const projets = [
    {
        id:1,
        text:"bla1"
    },
    {
        id:2,
        text:"bla2"
    },
    {
        id:3,
        text:"bla3"
    },
    {
        id:4,
        text:"bla4"
    },
    {
        id:5,
        text:"bla5"
    },
]


const [current, setCurrent] = useState(0);
const length = projets.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

function Slider() {
  return (
    <div>
    {projets.map((projet)=>console.log(projet.id)}
    </div>
  )
}

export default Slider