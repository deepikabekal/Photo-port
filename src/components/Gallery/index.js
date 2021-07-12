import react from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';
import PhotoList from '../PhotoList';
// import photo from '../../assets/small/commercial/0.jpg';

function Gallery(props) {
    const {currentCategory} = props;

    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category = {currentCategory.name}/>            
        </section>
    );
}

export default Gallery;