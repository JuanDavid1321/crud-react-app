import "./formInput.css"

const FormInput = (props) => { //props used for a lot of props from the father
    const {label, onChange, id, ...inputProps} = props;
    return ( 
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange}/>
        </div>
    );
}
 
export default FormInput;