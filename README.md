# AAI

Static site for Anabaptist Aid Initiative built with [Hugo](https://gohugo.io/).

## Structure
- `content/`: Markdown content for each page (home, videos, SALT program).
- `layouts/`: Hugo templates, including the shared base layout and per-page markup.
- `static/`: Static assets such as the shared CSS file.
- `config.toml`: Site configuration and navigation menus.

## Local development
1. Install [Hugo Extended](https://gohugo.io/installation/) (tested with `hugo v0.123.7`).
2. Run the development server:
   ```bash
   hugo server -D
   ```
3. Visit the site at the address printed in the terminal (defaults to http://localhost:1313).

To create a production build, run:
```bash
hugo
```
The generated site will be in the `public/` directory.
