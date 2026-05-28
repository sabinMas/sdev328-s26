export const getStep1 = (req, res) => {
    res.render("step1", {
        signup: {},
        theme: req.theme,
        bodyClass: req.bodyClass
    });
};

export const postStep1 = (req, res) => {
    // TODO: save step 1 data to session

    res.redirect("/signup/step/2");
};

export const getStep2 = (req, res) => {
    res.render("step2", {
        signup: {},
        theme: req.theme,
        bodyClass: req.bodyClass
    });
};

export const postStep2 = (req, res) => {
    // TODO: save step 2 data to session

    res.redirect("/signup/step/3");
};

export const getStep3 = (req, res) => {
    res.render("step3", {
        signup: {},
        theme: req.theme,
        bodyClass: req.bodyClass
    });
};

export const postStep3 = (req, res) => {
    // TODO: save step 3 data to session

    res.redirect("/signup/done");
};

export const getDone = (req, res) => {
    res.render("done", {
        signup: {},
        theme: req.theme,
        bodyClass: req.bodyClass
    });
};
