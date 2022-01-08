import PropTypes from "prop-types";
import styles from "./Button.module.css"

function Button({test}){
    return(
        <button className={styles.btn}>{test}</button>
    );
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;