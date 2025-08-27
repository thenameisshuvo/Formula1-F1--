# Formula 1 Project

## Project Description

This project is a comprehensive web application dedicated to Formula 1 enthusiasts. It provides users with up-to-date information about the Formula 1 season, including race schedules, team standings, and driver statistics. The application is designed with a modern and responsive user interface, ensuring a seamless experience across all devices.

## Features

- Real-time updates on race schedules and results
- Detailed team and driver profiles
- Interactive charts and statistics
- Responsive design for mobile and desktop

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/Formula1-F1--.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Formula1-F1--/f1
   ```

3. Install the dependencies:

   
   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000/`.

## Configure data provider (optional)

This app was built on the Ergast API shape. We now default to a non-Ergast mirror and allow switching providers via env vars.

1. Copy `.env.example` to `.env` in the `f1` folder.
2. Set one of the providers:
    - Jolpi mirror (no key, Ergast-compatible):
       - `REACT_APP_F1_API_BASE=https://api.jolpi.ca/ergast/f1`
    - Ergast original (last resort):
       - `REACT_APP_F1_API_BASE=https://ergast.com/api/f1`
    - OpenF1 (free, different schema; adapter work required):
       - `REACT_APP_F1_API_BASE=https://api.openf1.org/v1`
    - API-Sports (full coverage; key required; adapter work required):
       - `REACT_APP_F1_API_BASE=https://v1.formula-1.api-sports.io`
       - `REACT_APP_APISPORTS_KEY=your_key_here`
3. Restart the dev server after changing `.env`.

The data layer tries the env base first, then Jolpi, then Ergast.

## Usage

Navigate through the application using the header menu to explore different sections such as race schedules, team standings, and driver profiles. Use the interactive charts to gain insights into the performance of teams and drivers throughout the season.

## Contributing

We welcome contributions from the community. To contribute, please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding standards and includes appropriate tests.

## Acknowledgments

- Thanks to the Formula 1 API for providing real-time data.
- Special thanks to the contributors who have helped improve this project.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
