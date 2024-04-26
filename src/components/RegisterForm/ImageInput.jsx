import styles from "./ImageInput.module.css"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const ImageInput = () => {
    return ( 
        <div className={styles.imageInputContainer}>
            <label>Subir foto</label>
            <div className={styles.fileInputContainer}>
                <label htmlFor="file"> <DriveFolderUploadOutlinedIcon/></label>
                <label htmlFor="file"> Seleccione un archivo</label>
                <input 
                    required 
                    className={styles.imageInput}
                    type="file" 
                    id="file" 
                    name="file" 
                    accept=".jpg,.jpeg,.png"
                />
            </div>
        </div>
    );
}
 
export default ImageInput;