const ENV = process.env.NODE_ENV;

module.exports = {
  publicPath: ENV === "development" ? "" : "/onePieceGuo.github.io/", 
};