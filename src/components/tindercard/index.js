import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import './index.css';
import axios from 'axios';
import database from '../../firebase';


const TinderCards = () => {

    // DO NOT TOUCH COMMENTED CODE!
const [cubes, setCubes] = useState([]);

const [data, setData] = useState([]);



useEffect(() => {
    database
    .collection('cubes')
    .onSnapshot((snapshot) => 
        setCubes(snapshot.docs.map((doc) => doc.data()))
        );
        const fetchData = async () => {
            const result = await axios.get('https://meme-api.herokuapp.com/gimme/12')
            setData((result.data));
           
          };
       
          fetchData();
},[])

    return (
        

            <div className="tinder-card-container">
                {cubes.map((cube) => (
                    <TinderCard
                    key={cube.name}
                     className="swipe"
                     preventSwipe={['up', 'down']}>
                    <div style={{backgroundImage: `url(${cube.url})`}}
                        className="card">
                            <h3 className="name">{cube.name}</h3>
                        </div>
                    </TinderCard>
                ))}
                </div>
//         <div className="posts">
//         {data && data.count > 0 ? data.memes.map( (meme) => (
//     <div className="tinder-card-container">
//           <ul className="post-container">
//          <li key={meme.name} className="post">
//              <div style={{backgroundImage: `url(${meme.url})`}}
//                  className="card">
//                          <h3 className="name">{meme.author}</h3>
                        
//                  </div>
//                 </li>
//                 </ul> 
//     </div>         
    

// )) : "Loading.."
// }              
// <h1 onClick={(e) => {
// window.location.reload(e.target.value);
// }}>restart</h1>
// </div>
    );
}

export default TinderCards;