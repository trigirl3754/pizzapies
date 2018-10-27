import React from 'react';

const ListUnit = ({venue, handleListUnitClick}) => {
    return (
        <li className = "listUnit"
        aria-labelledby = {ListUnit}
        role = {'contentinfo'}
        tabIndex = {0} 
            onClick={() => 
                handleListUnitClick(venue)
            }
        >    
        <img src = {venue.categories[0].icon.prefix+"32"+ venue.categories[0].icon.suffix} 
             alt = {venue.categories[0].name} 
        />
            {venue.name}   
        </li>
    );
}

export default ListUnit;