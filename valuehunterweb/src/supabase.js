// supabase.js dosyası

const { createClient } = require('@supabase/supabase-js');

// Supabase projenize ait veritabanı URL'si ve hizmet anahtarını buraya ekleyin
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
