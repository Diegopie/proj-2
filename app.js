import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

// Config
const app = express();
const port = '8000';
ViteExpress.config({ printViteDevServerHost: true });

// * Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));

// * Run Server
ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));