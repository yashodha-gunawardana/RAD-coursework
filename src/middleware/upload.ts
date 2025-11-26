import multer  from "multer";

const storage = multer.memoryStorage()

// Create an upload middleware using multer
export const upload = multer({ storage })