import styles from "./ImageInput.module.css"

const ImageInput = () => {
    return ( 
        <div className={styles.imageInputContainer}>
            <label>Subir foto</label>
            <label htmlFor="file" ></label>
            <input 
                required 
                type="file" 
                id="file" 
                name="file" 
                accept=".jpg,.jpeg,.png"
            />
        </div>
    );
}
 
export default ImageInput;