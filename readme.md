# How to use this Project

## Clone this repo and specific branch release/2.0

```bash
git clone https://github.com/atamots/yes-frontend yes-frontend --single-branch --branch release/2.0
```

## How to run

1. Install all dependencies

   ```bash
   npm install
   ```

2. Create .env file

   ```bash
   cp .env.example .env
   ```

   _Env Variables Explanation :_

   ```bash
   VITE_API_BASE_URL="your api url"
   VITE_DASHBOARD_MENU_PREFIX="/panel" #can be any string but should start with / (slash)
   VITE_SECURE_LOCAL_STORAGE_PREFIX="" #can be any string
   VITE_SECURE_LOCAL_STORAGE_HASH_KEY="" #can be any string
   ```

3. Running development Server
   ```bash
   npm run dev
   ```
