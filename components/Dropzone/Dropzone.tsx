import React, { useState, useRef } from 'react';

const ImageUploadComponent: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleImageUpload(file);
        if (fileInputRef.current) {
            fileInputRef.current.files = e.dataTransfer.files;
        }
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        handleImageUpload(file);
    };

    const handleImageUpload = (file: File | null) => {
        if (file) {
            setSelectedImage(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            style={{ border: '2px dashed #ccc', padding: '1rem', marginBottom: '1rem' }}
        >
            <h2>Arrastra y suelta una imagen aquí</h2>
            <input type="file" accept="image/*" onChange={handleFileInputChange} ref={fileInputRef} />
            {selectedImage && (
                <div>
                    <h3>Imagen seleccionada:</h3>
                    <p>Nombre del archivo: {selectedImage.name}</p>
                    <p>Tamaño del archivo: {selectedImage.size} bytes</p>
                </div>
            )}
            {previewImage && (
                <div>
                    <h3>Vista previa:</h3>
                    <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                </div>
            )}
        </div>
    );
};

export default ImageUploadComponent;
