<a name="readme-top"></a>
<br />

# [\<TODO\>](repository)

Next-Gen Todo is a modern, responsive, and feature-rich to-do list application built with Next.js. This project is designed to help users manage their tasks efficiently and effectively.

### Built With 👷: 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)



## Features

- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Real-time Updates**: Automatically syncs data across devices.
- **User Authentication**: Secure login and user management.
- **Task Management**: Add, edit, delete, and organize tasks.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 18.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/andriiwp3/next-gen-todo.git
    cd next-gen-todo
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

Start the development server by running:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application. The page will automatically update as you make changes to the source files.

## Building for Production

```bash
npm run build
```

This will generate a build directory containing the production-ready code.

## Project Structure 🗽

    .
    ├── ...
    ├── public                  # Static assets like images, fonts, etc.
    ├── src                     # Main source directory
    │   ├── app                 # Contains Next.js application (AppRouter)
    │   ├── components          # Reusable UI components
    │   ├── stores              # Contains Zustand stores
    │   │── middleware.ts       # Next.js middleware
    │   └── routes.ts           # Application routes
    ├── .eslintrc.json          # Configuration for ESLint
    ├── .next.config.mjs        # Next.js configuration file
    ├── package.json            # Project metadata and depend
    └── tsconfig.json           # TypeScript configuration

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[repository]: https://github.com/andriiwp3/next-gen-todo
