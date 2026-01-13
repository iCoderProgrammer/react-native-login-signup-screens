# Publishing Guide for react-native-login-signup-screens

This guide provides step-by-step instructions for publishing the library to npm (public or private registry).

## Prerequisites

1. **npm account**: Create an account at [npmjs.com](https://www.npmjs.com/signup) if you don't have one
2. **Git repository**: Ensure your code is in a Git repository (GitHub, GitLab, etc.)
3. **Node.js and npm**: Make sure you have Node.js and npm installed

## Pre-Publishing Checklist

Before publishing, ensure the following:

- [ ] All code is tested and working
- [ ] Library builds successfully (`npm run build`)
- [ ] TypeScript types are generated correctly
- [ ] No linting errors (`npm run lint`)
- [ ] README.md is complete and accurate
- [ ] Version number is appropriate
- [ ] package.json has correct metadata (name, description, author, repository, etc.)
- [ ] LICENSE file is present
- [ ] .npmignore is configured correctly

## Step-by-Step Publishing Process

### Step 1: Update package.json Metadata

Edit `package.json` and ensure the following fields are correct:

```json
{
  "name": "react-native-login-signup-screens",
  "version": "1.0.0",
  "description": "A reusable React Native UI library for login and signup screens",
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/react-native-login-signup-screens.git"
  },
  "homepage": "https://github.com/yourusername/react-native-login-signup-screens#readme",
  "bugs": {
    "url": "https://github.com/yourusername/react-native-login-signup-screens/issues"
  }
}
```

**Important fields to update:**
- `author`: Your name and email
- `repository.url`: Your actual GitHub/GitLab repository URL
- `homepage`: Link to your repository or documentation
- `bugs.url`: Link to your issues page

### Step 2: Clean and Build

Ensure a fresh build:

```bash
# Clean previous builds
npm run clean

# Build the library
npm run build

# Verify TypeScript types
npm run typecheck
```

### Step 3: Verify Build Output

Check that the `lib/` directory contains:
- `commonjs/` - CommonJS build
- `module/` - ES modules build
- `typescript/` - TypeScript definitions

```bash
ls -la lib/
```

### Step 4: Test Locally (Optional but Recommended)

Test the library locally before publishing:

```bash
# In the library directory
npm link

# In a test React Native project
npm link react-native-login-signup-screens

# For iOS, run pod install
cd ios && pod install && cd ..
```

Test that all screens work correctly in your test app.

### Step 5: Login to npm

Login to npm using your credentials:

```bash
npm login
```

You'll be prompted for:
- Username
- Password
- Email address
- One-time password (if 2FA is enabled)

**For private registries:**
```bash
npm login --registry=https://your-registry-url
```

### Step 6: Check Package Name Availability

Verify the package name is available:

```bash
npm view react-native-login-signup-screens
```

If the package doesn't exist, you're good to go. If it exists, you'll need to:
- Use a different name, or
- Use a scoped package name (e.g., `@your-org/react-native-login-signup-screens`)

**For scoped packages:**
Update `package.json`:
```json
{
  "name": "@your-org/react-native-login-signup-screens"
}
```

And publish with:
```bash
npm publish --access public
```

### Step 7: Dry Run (Test Publish)

Perform a dry run to see what will be published without actually publishing:

```bash
npm publish --dry-run
```

This will show you:
- What files will be included
- The package size
- Any warnings or errors

### Step 8: Publish to npm

Once everything looks good, publish:

**For public packages:**
```bash
npm publish
```

**For scoped packages (public):**
```bash
npm publish --access public
```

**For private packages:**
```bash
npm publish --access restricted
```

**For private registries:**
```bash
npm publish --registry=https://your-registry-url
```

### Step 9: Verify Publication

After publishing, verify your package is available:

```bash
npm view react-native-login-signup-screens
```

Or check on npmjs.com:
```
https://www.npmjs.com/package/react-native-login-signup-screens
```

### Step 10: Create Git Tag (Recommended)

Create a Git tag for the version:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Or create an annotated tag:
```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

## Publishing Updates (Version Management)

When you need to publish updates, follow semantic versioning:

### Semantic Versioning

- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
- **MINOR** (1.0.0 → 1.1.0): New features, backward compatible
- **PATCH** (1.0.0 → 1.0.1): Bug fixes, backward compatible

### Update Version

**Option 1: Manual**
Edit `package.json` and change the version number.

**Option 2: Using npm version command**
```bash
# Patch version (1.0.0 → 1.0.1)
npm version patch

# Minor version (1.0.0 → 1.1.0)
npm version minor

# Major version (1.0.0 → 2.0.0)
npm version major
```

This will:
- Update `package.json` version
- Create a Git commit
- Create a Git tag

Then publish:
```bash
npm run build
npm publish
```

## Troubleshooting

### Error: Package name already exists
- Use a different name or scoped package name
- Check if you own the package name

### Error: You must verify your email
- Verify your email address on npmjs.com
- Check your email inbox for verification link

### Error: Two-factor authentication required
- Enable 2FA on your npm account
- Use OTP when logging in

### Error: Package size too large
- Check `.npmignore` file
- Remove unnecessary files from `files` array in `package.json`
- Ensure `node_modules` is excluded

### Error: Missing required fields
- Ensure `name`, `version`, `description`, and `license` are set in `package.json`

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check TypeScript configuration
- Verify all source files are correct

## Publishing to Private Registries

### GitHub Packages

1. Update `.npmrc`:
```
@your-org:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

2. Update `package.json`:
```json
{
  "name": "@your-org/react-native-login-signup-screens",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

3. Publish:
```bash
npm publish
```

### Other Private Registries

1. Configure registry in `.npmrc`:
```
registry=https://your-registry-url
//your-registry-url/:_authToken=YOUR_TOKEN
```

2. Login:
```bash
npm login --registry=https://your-registry-url
```

3. Publish:
```bash
npm publish --registry=https://your-registry-url
```

## Post-Publishing

After successful publishing:

1. ✅ Update your repository with the latest code
2. ✅ Create a GitHub release (if using GitHub)
3. ✅ Update documentation if needed
4. ✅ Announce the release (social media, blog, etc.)
5. ✅ Monitor for issues and feedback

## Best Practices

1. **Always test locally** before publishing
2. **Use semantic versioning** consistently
3. **Write clear commit messages** and changelog
4. **Keep README.md updated** with latest features
5. **Tag releases** in Git
6. **Test installation** in a fresh project after publishing
7. **Monitor package downloads** and issues
8. **Respond to issues** promptly

## Quick Reference Commands

```bash
# Build
npm run build

# Type check
npm run typecheck

# Lint
npm run lint

# Login to npm
npm login

# Dry run
npm publish --dry-run

# Publish
npm publish

# Update version (patch)
npm version patch && npm run build && npm publish

# Update version (minor)
npm version minor && npm run build && npm publish

# Update version (major)
npm version major && npm run build && npm publish
```

## Additional Resources

- [npm Documentation](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
- [npm Package Best Practices](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [React Native Library Guide](https://reactnative.dev/docs/native-modules-setup)

---

**Note**: Replace placeholder values (your-org, your-username, etc.) with your actual values before publishing.
