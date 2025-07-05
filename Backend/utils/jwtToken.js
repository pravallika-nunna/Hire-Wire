// export const sendToken = (user, statusCode, res, message) => {
//   const token = user.getJWTToken();
//   const options = {
//     expires: new Date(
//       Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//   };

//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     // user,
//     message,
//     // token,
//   });
// };




export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,

    // ✅ Add these two for production
    secure: true,           // Ensures cookie only sent over HTTPS
    sameSite: "None",       // Allows cross-site cookie (frontend ≠ backend)
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message,
  });
};