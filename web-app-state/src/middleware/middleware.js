
export const visitorCount = (req, res, next) => {
    //cookie-parser will add all cookies to the req.cookies object
    console.log(req.cookies);

    if (req.cookies.visited) {
        const visited = Number(req.cookies.visited) + 1;
        res.cookie("visited", visited, { maxAge: 30 * 60 * 1000 })
        console.log("Visited subsequently");
    } else {
        res.cookie("visited", 1, { maxAge: 30 * 60 * 1000 }) //invalidated in 30m
        console.log("Visited 1st time");
    }

    res.cookie("client", "Josh");
    res.cookie("country-code", "US");

    //move on to the next middleware
    next();
}