// API - Root Route/ Index Page
exports.index_get = (req, res) => {
    // res.send("Welcome to our Blog App");
    res.render("home/index", {welcomeMessage: "Welcome to Blog App"});
}