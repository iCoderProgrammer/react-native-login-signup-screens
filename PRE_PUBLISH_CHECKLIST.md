# Pre-Publish Checklist

Use this checklist before publishing the library to ensure everything is ready.

## Code Quality

- [ ] All source files are error-free
- [ ] TypeScript compilation passes (`npm run typecheck`)
- [ ] No linting errors (`npm run lint`)
- [ ] Library builds successfully (`npm run build`)
- [ ] All exports are working correctly
- [ ] Type definitions are generated correctly

## Package Configuration

- [ ] `package.json` has correct name
- [ ] Version number is appropriate (semantic versioning)
- [ ] Description is clear and accurate
- [ ] Author field is filled (name and email)
- [ ] Repository URL is correct
- [ ] Homepage URL is correct (if applicable)
- [ ] Bugs URL is correct (if applicable)
- [ ] License is specified (MIT)
- [ ] Keywords are relevant and helpful
- [ ] `files` array includes only necessary files
- [ ] Peer dependencies are correct
- [ ] Dev dependencies are not in dependencies

## Build Output

- [ ] `lib/` directory exists
- [ ] `lib/commonjs/` contains CommonJS build
- [ ] `lib/module/` contains ES modules build
- [ ] `lib/typescript/` contains TypeScript definitions
- [ ] All screen components are built
- [ ] Type definitions are complete

## Documentation

- [ ] README.md is complete and accurate
- [ ] Installation instructions are correct
- [ ] Usage examples are working
- [ ] API documentation is complete
- [ ] All props are documented
- [ ] License information is included

## Files

- [ ] LICENSE file exists
- [ ] .npmignore is configured correctly
- [ ] .gitignore is configured correctly
- [ ] Source files are in `src/` directory
- [ ] No unnecessary files in root directory

## Testing

- [ ] Library works in a test React Native app
- [ ] All screens render correctly
- [ ] Props are passed correctly
- [ ] Callbacks are working
- [ ] No runtime errors
- [ ] TypeScript types work in consuming app

## npm Configuration

- [ ] npm account is set up
- [ ] Logged in to npm (`npm whoami`)
- [ ] Package name is available (or you own it)
- [ ] 2FA is enabled (recommended)
- [ ] Email is verified

## Git

- [ ] All changes are committed
- [ ] Code is pushed to repository
- [ ] Repository is accessible
- [ ] README matches repository

## Final Checks

- [ ] Dry run passes (`npm publish --dry-run`)
- [ ] Package size is reasonable
- [ ] No sensitive information in package
- [ ] No hardcoded credentials
- [ ] Version number follows semantic versioning

## Quick Commands

```bash
# Run all checks
npm run build
npm run typecheck
npm run lint

# Verify package
npm publish --dry-run

# Check what will be published
npm pack --dry-run
```

## After Publishing

- [ ] Verify package is on npm
- [ ] Test installation in fresh project
- [ ] Create Git tag for version
- [ ] Update changelog (if maintained)
- [ ] Announce release (if applicable)

---

**Date Completed**: _______________
**Version**: _______________
**Published by**: _______________
