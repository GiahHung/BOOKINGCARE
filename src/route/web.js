import express from "express";
import homeController from "../controller/HomeController";
let router = express.Router();

let initWebRouter = (app) =>{
    router.get("/", homeController.getHomepage);
    router.get("/CRUD", homeController.getCRUD);

    router.post("/post-crud", homeController.postCRUD);

    router.post("/put-crud", homeController.putCRUD);

    router.get("/get-CRUD", homeController.displayGetCRUD);

    router.get("/edit-CRUD", homeController.getEditCRUD);

    router.get("/delete-crud", homeController.deleteCRUD);

    return app.use("/", router);
}

module.exports = initWebRouter;