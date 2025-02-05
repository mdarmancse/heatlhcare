import jwt from 'jsonwebtoken';

export default function authenticateToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];

    if (!bearerHeader) {
        return res.status(401).json({ message: 'Access Denied' });
    }

    const bearer = bearerHeader.split(" ");
    if (bearer.length !== 2) {
        return res.status(400).json({ message: 'Invalid Authorization Format' });
    }

    const bearerToken = bearer[1];

    try {

        const decodedToken = jwt.decode(bearerToken);

        if (!decodedToken || !decodedToken.exp) {
            return res.status(400).json({ message: 'Invalid Token' });
        }

        const expiryTimestamp = decodedToken.exp;
        const currentTimestamp = Math.floor(Date.now() / 1000);

        if (currentTimestamp >= expiryTimestamp) {
            return res.status(401).json({ message: 'Token Expired' });
        }
        const verified = jwt.verify(bearerToken, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(400).json({ message: 'Invalid Token', error: error.message });
    }
}
