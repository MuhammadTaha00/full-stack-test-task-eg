import jwt from 'jsonwebtoken';

const isTokenExpired = (token: string | null): boolean => {
    try {        
        if (!token) {
            return true;
        }
        const decodedToken: any = jwt.decode(token, { complete: true });

        if (!decodedToken || !decodedToken.payload.exp) {
            return false;
        }

        const currentTime = Math.floor(Date.now() / 1000);

        const isExpired = decodedToken.payload.exp <= currentTime;

        return isExpired;
    } catch (error) {
        console.error('Error decoding JWT:', error);
        return true;
    }
}
export default isTokenExpired