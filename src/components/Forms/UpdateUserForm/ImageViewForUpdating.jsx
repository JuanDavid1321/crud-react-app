import React from "react";
import styles from "../NewUserForm/ImageView.module.css";

const ImageViewForUpdating = ({ file, actualFile }) => {
    const imageUrl = file ? URL.createObjectURL(file) : actualFile;

    return (
        <div className={styles.imageViewContainer}>
            <img className={styles.imageView} src={imageUrl} alt="" />
        </div>
    );
};

export default ImageViewForUpdating;
