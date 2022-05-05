import React from 'react';

export default function Goblin({ filteredGoblins }) {
  return (
    // be sure you take a look at this component i'm handing you and figure out what props it will need to work correctly.
    <div 
      className='goblin' 
      onClick={() => filteredGoblins.handleDeleteGoblin && filteredGoblins.handleDeleteGoblin(filteredGoblins.goblin.name)}>
      <h3>{filteredGoblins.goblin.name}</h3>  
      <img src="goblin.png" style={{ backgroundColor: filteredGoblins.goblin.color }} />
      <p>{filteredGoblins.goblin.hp} HP</p>
    </div>
  );
}


//not sure I passed the right props here, not sure at all.... what makes this different from the movie one? hmm....
//like, why can't I just pass individual color, name props to Goblin()? Where do those come from anyways on MovieItem?