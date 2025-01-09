# Local Setup Instructions

1. Create a new directory on your local machine and copy all these files into it

2. Open a terminal in that directory and run these commands:
```bash
# Initialize git repository
git init

# Install dependencies
npm install

# Create initial commit
git add .
git commit -m "Initial commit"

# Link to your GitHub repository (replace with your repository URL)
git remote add origin https://github.com/yourusername/findr.git
git branch -M main
git push -u origin main
```

3. After pushing to GitHub, go to Netlify:
   - Sign in to Netlify
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Build settings will be automatically detected
   - Click "Deploy site"

The site should deploy automatically and any future pushes to the main branch will trigger new deployments.
