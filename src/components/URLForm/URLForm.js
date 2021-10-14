import classes from './URLForm.module.css'

const UrlForm = () => {
    return (
        <section className={classes.form}>
            <form>
                <input type="text" placeholder={'Site URL'}/>
                <input type="text" placeholder={'Cookie if needed'}/>
                <p>Please select the types of scan you wish to perform</p>
                <div className={classes.checkboxes}>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                </div>
                <button>SCAN</button>
            </form>
        </section>
    );
};

export default UrlForm;