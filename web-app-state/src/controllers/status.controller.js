export const getStatus = (req, res) => {
    res.render("status", {
        theme: req.theme,
        bodyClass: req.bodyClass,
        cookies: req.cookies || {},
        session: req.session || {}
    });
};

export const getStatusJson = (req, res) => {
    res.json({
        cookies: req.cookies || {},
        session: req.session || {}
    });
};
