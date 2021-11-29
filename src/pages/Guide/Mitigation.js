import classes from "./GuideStyles.module.css";
import Card from "../../components/UI/Card/Card";

const Mitigation = (props) => {
    return (
        <section className={classes.content}>
            <div className={classes.title}>
                {props.title}
            </div>
            <Card>
                {props.content}
            </Card>
        </section>
    );
};

export default Mitigation;