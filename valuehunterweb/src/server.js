const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = 'https://ekywywmcekckrjtpmcqv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVreXd5d21jZWtja3JqdHBtY3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxOTk3MTEsImV4cCI6MjAyMzc3NTcxMX0.Tw0Z6GcHGbatsPYmYkDoCjcDGI4vBqIRRlCkkhPMHlY';
const supabase = createClient(supabaseUrl, supabaseKey);
app.use(bodyParser.json());

app.post('/reset-password', async (req, res) => {
    try {
        // Extract data from the request body
        const { email, newPassword } = req.body;

        // Update the user's password in the Supabase database
        const { error } = await supabase
            .from('users')
            .update({ password: newPassword })
            .eq('email', email);

        if (error) {
            throw new Error('Failed to update password');
        }

        // Respond with success message
        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error changing password:', error.message);
        res.status(500).json({ error: 'An error occurred while changing the password' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});