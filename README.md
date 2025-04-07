
# 🚀 Render Service App

## 📖 Overview
The Render Service App is a Node.js application built using Express. It provides endpoints to fetch service data from an external API. The application fetches data from any cloud service about the user's various services on that cloud.

## ✨ Features
- 🏎️ **Express Server**: A lightweight and fast server setup using Express.js.
- 🔐 **Environment Variables**: Uses `dotenv` to manage environment variables.
- 🌐 **External API Integration**: Fetches data from an external API using Axios.
- ⚠️ **Error Handling**: Proper error handling for failed API requests.

## 🛠️ Prerequisites
- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
- **npm**: Node Package Manager is required to install dependencies.

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rutSimanTov/render-service-app.git
   cd render-service-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create an API Key**:
   You need to create an API key in the cloud service from which you want to fetch information about your services. Follow these steps to create an API key:
   - Log in to your cloud service account.
   - Navigate to the API section of the dashboard.
   - Generate a new API key and copy it.

4. **Create a `.env` file**:
   Create a `.env` file in the root directory of the project and add your API key:
   ```env
   API_KEY=your_api_key_here
   PORT=3000
   ```

## 🚀 Running the Application

1. **Start the server**:
   ```bash
   npm start
   ```

2. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000/services`. You should see a message indicating that the server is running.

3. **Fetch Service Data**:
   To fetch service data, navigate to `http://localhost:3000/services`.

## 🗂️ Project Structure
```
render-service-app/
├── node_modules/
├── src/
│   ├── app.js
│   └── ...
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🔌 API Endpoints

- **GET /**:
  - **Description**: Returns a message indicating that the server is running.
  - **Example**: `http://localhost:3000/`
  - **Response**:
    ```text
    Render service application is running
    ```

- **GET /services**:
  - **Description**: Fetches service data from an external API.
  - **Example**: `http://localhost:3000/services`
  - **Response**:
    ```json
    [
      {
        "id": "service1",
        "name": "Service 1",
        ...
      },
      ...
    ]
    ```

## 🛑 Error Handling
If there is an error while fetching data from the external API, the server will respond with a 500 status code and a JSON error message:
```json
{
  "error": "Error fetching services"
}
```

## 💡 Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.
