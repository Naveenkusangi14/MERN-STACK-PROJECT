import { Contact } from "../models/contact.models.js";

import { ApiResponse } from "../utiles/ApiResponse.js";
import { asyncHandler } from "../utiles/asynchandler.js";

const contactForm = asyncHandler(async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
     res
      .status(200)
      .json(new ApiResponse(200, user, "Account details updated successfully"));
  } catch (err) {
    throw new ApiError(500, "Requried all details");
  }
});

export default contactForm;
