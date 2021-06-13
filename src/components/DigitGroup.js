import styles from "./DigitGroup.module.css";
import Button from "./Button";

function DigitGroup(props) {
	return (
		<div className={styles.digitWrapper}>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="1"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="2"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="3"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="4"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="5"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="6"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="7"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="8"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="9"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="0"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="00"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="."
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="+"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="-"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="*"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="/"
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="="
			></Button>
			<Button
				onButtonClickHandler={props.onButtonClickHandler}
				label="AC"
			></Button>
		</div>
	);
}

export default DigitGroup;
