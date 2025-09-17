# Finance Coach - React Native Budget App

A cross-platform (iOS & Android) mobile budget app built with React Native. Features include:
- Income input (current & expected)
- Customizable expense categories
- Automatic calculations
- Remaining balance/deficit indication
- Summary dashboard (total income, expenses, balance/deficit)
- Intuitive UI/UX (forms, summary cards, progress bars/charts)
- Local storage (AsyncStorage/SQLite)
- Cloud backup (Firebase)

## Project Structure
- `components/` - Reusable UI components
- `screens/` - App screens (Income, Expenses, Dashboard, etc.)
- `navigation/` - Navigation setup
- `services/` - Data storage and Firebase integration
- `assets/` - Images, icons, etc.

## Setup
1. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
2. Run on Android:
   ```sh
   npx react-native run-android
   ```
   Run on iOS:
   ```sh
   npx react-native run-ios
   ```

## Features
- Input income and expenses
- Custom categories
- Real-time calculations
- Data stored locally and backed up to cloud
- Clear dashboard with charts and summaries

---

Replace this README with more details as you build out the app.