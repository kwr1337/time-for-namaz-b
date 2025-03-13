const baseURL = process.env.BASE_URL || 'http://localhost:3000';

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// При сохранении пути к файлу используйте полный URL
const saveImage = (file) => {
    const filePath = `/uploads/qrcodes/${file.filename}`;
    return `${baseURL}${filePath}`;
} 