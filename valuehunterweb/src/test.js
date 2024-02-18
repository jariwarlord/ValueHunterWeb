const jwt = require('jsonwebtoken');

// Function to decode JWT token and extract email
function getEmailFromToken(token) {
    try {
        // Decode the token
        const decodedToken = jwt.decode(token, { complete: true });
        
        // Extract the email from the decoded token payload
        const email = decodedToken.payload.email;
        
        return email;
    } catch (error) {
        // If there's an error decoding the token or extracting the email, return null
        console.error('Error decoding token:', error.message);
        return null;
    }
}

// Example usage
const token = 'your_jwt_token_here';
const email = getEmailFromToken(token);
if (email) {
    console.log('Email:', email);
} else {
    console.log('Failed to get email from token.');
}
