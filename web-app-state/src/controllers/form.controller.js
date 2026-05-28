export const getStep1 = (req, res) => {
    res.render("step1", {
        signup: {},
        theme: req.theme,
        bodyClass: req.bodyClass
    });
};

export const postStep1 = (req, res) => {
    const {firstName, lastName} = req.body;
    req.session.firstName = firstName;
    req.session.lastName = lastName;

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
    const {email, favoriteColor} = req.body;
    req.session.email = email;
    req.session.favoriteColor = favoriteColor;

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
   const {notes} = req.body;
   req.session.notes = notes;
    res.redirect("/signup/done");
};

export const getDone = (req, res) => {
    res.render("done", {
        signup: req.session,
        theme: req.theme,
        bodyClass: req.bodyClass
    });
};
