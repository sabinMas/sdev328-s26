export const getCookies = (req, res) => {
    res.render("cookies", {
        bodyClass: ""
    });
};

export const postCookies = (req, res) => {
    // TODO: read/write cookie logic

    res.redirect("/cookies");
};

export const getProfile = (req, res) => {
    res.render("profile", {
        theme: req.theme,
        bodyClass: req.bodyClass,
        profile: {}
    });
};

export const postProfile = (req, res) => {
    // TODO: save profile to session

    res.redirect("/profile");
};
