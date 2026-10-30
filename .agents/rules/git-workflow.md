---
trigger: always_on
---

---

description: Gitflow Workflow Rules to apply when performing any git operations
globs: \*
alwaysApply: false

---

# Gitflow Workflow Standards

## 1. Branch Strategy

- `main` / `master`: Production-ready code only. Never commit or push directly to main.
- `develop`: Integration branch for features.
- `feature/<name>`: Feature branches branched off `develop` and merged back into `develop`.
- `release/<version>`: Preparation for production release (branched off `develop`).
- `hotfix/<name>`: Critical fixes for production (branched off `main` and merged into both `main` and `develop`).

## 2. Commit Rules (Conventional Commits)

Format: `<type>(<scope>): <subject>`

- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`.
- Keep descriptions concise, in the imperative mood, and without a trailing period.

## 3. Pull Requests & Merging

- Before merging features into `develop`, rebase or pull latest `develop`.
- Ensure clean commit history and no merge conflict markers.
- Never commit environment files (`.env*`), node_modules, or sensitive credentials.
