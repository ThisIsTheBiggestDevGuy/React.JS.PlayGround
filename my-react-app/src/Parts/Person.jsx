
import PropTypes from 'prop-types';


function Person(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Active {props.isActive ? 'Active' : 'Deactive'}</p>
        </div>
    );
}
Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isActive: PropTypes.bool,
}
Person.defaultProps = {
    name: 'Geust',
    age: 17,
    isActive: false,
}

export default Person;
