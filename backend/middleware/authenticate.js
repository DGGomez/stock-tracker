const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        let decocedToken = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decocedToken.user;
        console.log(req.user);
        next();
    } catch (error) {
        console.log('Middleware authenticate error: ', error);
        return res.status(401).send({ message: 'authentication failed' });
    }
};  

module.exports = authenticate;