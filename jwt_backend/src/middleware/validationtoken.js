
import jwt from "jsonwebtoken";
import "dotenv/config";

export default  (req, res, next) => {
  const token = req.headers.token;
      console.log(token)
  if (token) {
    //verify
    try {
        // const xtoken = token.split(" ")[1];
      const isValid = jwt.verify(token,process.env.JWT_SECRET);
      if (isValid) next();
      else
        return res
          .status(403)
          .json({ success: false, message: "Invalid Token" });
    } catch (err) {
      return res.status(403).json(err);
    }
  } else res.status(403).json("Token not provided");

}
