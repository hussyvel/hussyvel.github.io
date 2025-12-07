---
layout: post
title: "Introduction to Git and GitHub: Complete Guide for Beginners"
date: 2025-12-06 14:30:00 -0300
categories: [development, tools]
tags: [git, github, version-control, tutorial]
author: Hussyvel
lang: en
permalink: /en/blog/:year/:month/:day/:title/
---

# Introduction to Git and GitHub: Complete Guide for Beginners

If you're starting in programming, you've probably heard about **Git** and **GitHub**. But what exactly are these tools and why are they so important?

## What is Git?

**Git** is a distributed version control system created by Linus Torvalds in 2005. It allows you to:

- Track all changes in your code
- Work in teams without conflicts
- Revert to previous versions when needed
- Create branches to experiment with new features

## What is GitHub?

**GitHub** is a code hosting platform that uses Git. Think of it as a "social network for developers". With GitHub, you can:

- Store your projects in the cloud
- Collaborate with other developers
- Contribute to open source projects
- Build your professional portfolio

## Essential Git Commands

Here are the commands you'll use 90% of the time:

### Initializing a repository

```bash
# Create a new repository
git init

# Clone an existing repository
git clone https://github.com/user/repository.git
```

### Working with changes

```bash
# See status of changes
git status

# Add files to staging
git add file.txt
git add .  # adds all files

# Make a commit
git commit -m "Descriptive message of what was done"
```

### Syncing with remote repository

```bash
# Send changes to GitHub
git push origin main

# Download changes from GitHub
git pull origin main

# See remote repositories
git remote -v
```

### Working with Branches

```bash
# Create a new branch
git branch branch-name

# Switch to a branch
git checkout branch-name

# Create and switch to new branch (shortcut)
git checkout -b branch-name

# List branches
git branch

# Merge branches
git merge branch-name
```

## Basic Workflow

A typical Git workflow would be:

1. **Clone** the repository (first time)
2. **Create a branch** for your feature
3. **Make changes** to the code
4. **Add** changes to staging
5. **Commit** the changes
6. **Push** to GitHub
7. **Create a Pull Request** (if working in a team)
8. **Merge** after approval

## Best Practices

### Commit Messages

Write clear and descriptive messages:

✅ **Good:**
```bash
git commit -m "Add email validation to registration form"
git commit -m "Fix infinite loading bug on home page"
```

❌ **Bad:**
```bash
git commit -m "fix"
git commit -m "changes"
git commit -m "updates"
```

### .gitignore

Always use a `.gitignore` file to avoid committing unnecessary files:

```
# Node
node_modules/
npm-debug.log

# Python
__pycache__/
*.pyc

# IDEs
.vscode/
.idea/

# Environment
.env
.env.local
```

## Resources to Learn More

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Learn Git Branching](https://learngitbranching.js.org/) - Interactive tutorial
- [Oh My Git!](https://ohmygit.org/) - Game to learn Git

## Conclusion

Git and GitHub are essential tools for any modern developer. At first it may seem complex, but with practice, you'll master the basic concepts quickly.

The best way to learn is by practicing! Create a test repository and experiment with the commands. Don't be afraid to make mistakes - with Git, you can always go back.

---

**Pro Tip:** Set up your Git credentials globally so you don't have to type them every time:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

In the next posts, I'll cover more advanced topics like Git Rebase, Cherry Pick, and professional workflows. See you then! 👋
