# CRP Observation Tool

> A classroom observation app for the "CRP in Action: Leading with Observation"
> initiative — school observers record evidence of Culturally Responsive
> Practices against a configurable framework.

[![Lint](https://github.com/nyuchi/edu-experience/actions/workflows/lint.yml/badge.svg)](https://github.com/nyuchi/edu-experience/actions/workflows/lint.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
![Astro](https://img.shields.io/badge/Astro-5-BC52EE?style=flat-square&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-Auth_+_Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black)

**Status:** prototype — last substantive commit 2025-08-25 | **Firebase project:** `educator-evaluations` | **Repo slug:** `edu-experience`

> The repository is called `edu-experience` and the `package.json` name is still
> the Firebase Studio scaffold default, `adorable-atmosphere`. The application
> refers to itself as the **CRP Observation Tool**, and elsewhere as
> **EducatorEval**. All three names describe this one codebase.

---

## What it is

An Astro 5 site with React 19 islands, backed by Firebase. It supports an
initiative described in `DEVELOPMENT_INSTRUCTIONS.md` as targeting 5,000
classroom observations across roughly 80 school observers — principals,
directors, coordinators, PLC coaches and DEI specialists — recording evidence of
**CRP (Culturally Responsive Practices)** in lessons.

The observation model is a framework of "look-fors" that a coordinator can edit
in the browser rather than in code. Observers work through a mobile-oriented
form during a lesson; the results roll up into dashboards that report CRP
evidence counts and rates.

| Route           | Screen                                              |
| --------------- | --------------------------------------------------- |
| `/`             | Entry page                                          |
| `/observe`      | Mobile observation form                             |
| `/observations` | List of recorded observations                       |
| `/schedule`     | Observation scheduler                               |
| `/dashboard`    | Observation dashboard and reporting                 |
| `/framework`    | Framework configurator and editor, for coordinators |
| `/data`         | Data management                                     |
| `/profile`      | User profile and role switching                     |

Firebase supplies authentication, Firestore and callable functions
(`src/firebase/`), surfaced to the UI through React context providers for auth,
data and admin state, plus hooks for observations, frameworks and teachers.

**Status.** This is a prototype and has not been developed since 25 August 2025;
every commit after that date is CI configuration. `src/firebase/config.ts`
contains a hard-coded fallback config for the `educator-evaluations` Firebase
project alongside the `PUBLIC_FIREBASE_*` environment variables — check that
before deploying anywhere real.

## Install

```bash
git clone https://github.com/nyuchi/edu-experience.git
cd edu-experience
npm install
cp .env.example .env
```

Fill in the `PUBLIC_FIREBASE_*` values for your own Firebase project, then:

```bash
npm run dev      # http://localhost:4321
```

See [FIREBASE_SETUP.md](FIREBASE_SETUP.md) for provisioning the Firebase side.

## Commands

| Command                      | Description                            |
| ---------------------------- | -------------------------------------- |
| `npm run dev`                | Astro dev server on `localhost:4321`   |
| `npm run build`              | Production build to `./dist/`          |
| `npm run preview`            | Preview the build locally              |
| `npm run firebase:emulators` | Start the Firebase emulator suite      |
| `npm run firebase:serve`     | Serve through Firebase Hosting locally |
| `npm run firebase:deploy`    | Build, then `firebase deploy`          |

## Documentation

The repository carries its working notes at the top level. They were written
during the August 2025 build and have not been revised since:

| File                          | Covers                                               |
| ----------------------------- | ---------------------------------------------------- |
| `DEVELOPMENT_INSTRUCTIONS.md` | The initiative, target users and application goals   |
| `DEVELOPMENT.md`              | Project structure as built                           |
| `FIREBASE_SETUP.md`           | Firebase provisioning                                |
| `FRAMEWORK_EDITOR_GUIDE.md`   | Coordinator guide to editing frameworks in the UI    |
| `FRAMEWORK_SYNC_UPDATE.md`    | Reconciling the observe page's look-fors with config |
| `FRAMEWORK_SYNC_COMPLETE.md`  | The de-duplication of hard-coded look-fors           |
| `IMPLEMENTATION_COMPLETE.md`  | What the Firebase integration added                  |
| `USER_PROFILE_FEATURES.md`    | Profile management and role switching                |

## Licence

Licensed under the [MIT License](https://opensource.org/licenses/MIT); see
[LICENSE](LICENSE).
