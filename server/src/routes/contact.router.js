import { Router } from "express";

import contactForm from "../controller/contact.contoller.js";

const router = Router();

router.route("/contact").post(contactForm);

export default router