import express from 'express'
import { isAdmin, isAuth } from '../middlewares/isAuth.js';
import { addLectures, createCourse, deleteCourse, deleteLecture, getAllstats, updateRole, getAllUser, deleteUser } from '../controllers/admin.js';
import { uploadFiles } from '../middlewares/multer.js'
const router = express.Router();

router.post("/course/new",isAuth,isAdmin,uploadFiles,createCourse);
router.post("/course/:id", isAuth, isAdmin, uploadFiles, addLectures);
router.delete("/lecture/:id", isAuth, isAdmin, deleteLecture);

router.delete("/course/:id", isAuth, isAdmin, deleteCourse);
router.get("/stats",isAuth,isAdmin,getAllstats);
router.put("/user/:id", isAuth, updateRole);
router.get("/users", isAuth, isAdmin, getAllUser);

router.delete("/user/:id",isAdmin,isAuth, deleteUser);


export default router;