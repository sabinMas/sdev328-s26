export const getIndex = (req, res) => {
    res.render("index", {
        bodyClass: req.bodyClass
    });
};
