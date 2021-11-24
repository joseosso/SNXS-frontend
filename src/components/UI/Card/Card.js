import classes from './Card.module.css'

const Card = (props) => {
    return (
        <div className={classes.card}
             style={{backgroundColor: props.backgroundColor || '#444444', color: props.color || 'white'}}>
            {props.children}
        </div>
    );
};

export default Card;
