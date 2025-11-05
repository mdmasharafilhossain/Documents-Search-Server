

## Project Overview
DocFind Backend is a simple **Node.js + Express.js** API that simulates a legal assistant tool.
It processes search queries and returns summarized results from predefined legal documents.
The backend is designed for integration with a React-based frontend.



## Tech Stack


- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Middleware:** CORS, express.json()
- **Port:** 5000


---

## API Endpoints


### Search Operations
| Endpoint | Method | Description | Access |
|-----------|---------|-------------|---------|
| `/generate-result` | POST | Accepts a search query and returns a summary along with matching legal documents from the mock dataset. | Public |


---



## Live Link

- **Backend Live Link:** [Backend Live](https://docfind-server.vercel.app)

## Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/mdmasharafilhossain/Documents-Search-Server
cd Documents-Search-Server
```
### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm run dev
```

