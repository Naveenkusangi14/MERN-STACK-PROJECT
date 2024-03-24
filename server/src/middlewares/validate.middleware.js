import { ApiError } from "../utiles/ApiError.js";
import { asyncHandler } from "../utiles/asynchandler.js";

const validate = (schema) =>
  asyncHandler(async (req, res, next) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      // You can now access the `res` object here
      res.status(200).send("Validation successful"); // Example response
      next();
    } catch (err) {
      throw new ApiError(401, err?.message || "Validation failed");
    }
  });

export default validate;
