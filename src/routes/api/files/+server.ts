// src/routes/api/files.ts
import fs from 'fs';
import path from 'path';
import { json } from '@sveltejs/kit';

export async function GET() {
    const folderPath = path.resolve('static/md');
    try {
        const files = fs.readdirSync(folderPath);
        const fileNames = files.filter(file =>
            fs.statSync(path.join(folderPath, file)).isFile()
        );
        return json({ fileNames }); // Returns a valid Response object with JSON content
    } catch (err) {
        return new Response(JSON.stringify({ error: 'Unable to read files' }), { status: 500 });
    }
}
