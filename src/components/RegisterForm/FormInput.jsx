const FormInput = (props) => { //props used for a lot of props from the father
    return ( 
        <div className="formInput">
            <label>Username</label>
            <input placeholder={props.placeholder} />
        </div>
    );
}
 
export default FormInput;