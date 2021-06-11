import styles from "./Button.module.css";

function Button(props) {
	return (
		<button onClick={props.onButtonClickHandler} className={styles.button}>
			{props.label}
		</button>
	);
}

export default Button;
