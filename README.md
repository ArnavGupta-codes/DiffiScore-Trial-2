# DiffiScore-Trial-2
🚀 Multilingual Insurance RAG System (Quark Hackathon 2025)
Authors:
Arnav, Tanay, Anish, Athish
Date: 3/10/2025
Link to the video demonstration: https://drive.google.com/file/d/1hWx_WvTkvIpeKIa7PS-7jWUYRLmyi13n/view?usp=drive_link

📝 Introduction
Welcome to Diffiscore, a powerful platform for uploading, storing, and searching questions efficiently. Whether you're a student, teacher, or researcher, Diffiscore makes it easy to manage question banks.

🌟 Key Features
Uploading Questions:
Through the Upload Page, a user can add multiple images with the same tag at once which can be helpful for a prof if we wants to make a exam on a specific topic with multiple questions, so the prof does not have to repeatitively keep adding single images which can be irritating.
It allows the user to delete images after selection, if he has selected a wrong image for upload.

Searching and Accessing Questions:
To retrieve your saved questions, click on "Search Questions," enter the tag, specify the number of questions, and instantly view them in a organized manner and on clicking the image you can see the expanded view of the whole question and for each question this can be done. But that's not all—you can also access questions uploaded by others, making Diffiscore a collaborative and resourceful platform for learning. Also it provides feature of Downloading the image on your local device.

🛠️ Tech Stack
🚀 FastAPI for backend
🔍 FAISS for image embeddings and similarity search
🤗 Hugging Face Embeddings for text and image embeddings
🖼️ PIL (Pillow) for image processing
🌐 Uvicorn for running the FastAPI server
⚛️ React.js for frontend
📡 Axios for API communication
🎨 Tailwind CSS for modern UI
⚡ Vite for optimized frontend development
🗄️ FAISS Vector Store for embedding storage
💾 Local Storage for image storage

⚙️ Installation & Setup
📌 Prerequisites
🐍 Python 3.13+
📂 FAISS Index for efficient similarity search
🤗 Hugging Face Transformers for text processing
💻 Reactjs for frontend
⚡ FastAPI as the backend framework

📥 Installation Steps
1) Clone the repository:
git clone https://github.com/ArnavGupta-codes/DiffiScore-Trial-2.git

2) Create and activate virtual environment:
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

3) Install dependencies:
pip install -r requirements.txt

4)Go to the backend directory and run the backend
cd backend
uvicorn main:app --reload

5)
cd ..
cd frontend
npm start

6)Open the website and it will run smoothly.

📂 Directory Structure
DiffiScore/
├── backend/
│   ├── _pycache_/
│   ├── backend/
│   │   ├── faiss_index/
│   │   └── uploads/
│   ├── main.py
│   └── requirements.txt
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   ├── images/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── downloadImage.js
│   │   │   ├── ImageDropArea.js
│   │   │   ├── logout.js
│   │   │   ├── Navbar.js
│   │   │   ├── Search.js
│   │   │   └── Upload.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── SearchPage.js
│   │   │   └── UploadPage.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   └── index.js
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── README.md

📚 References
📘 FastAPI Documentation: https://fastapi.tiangolo.com/
⚛️ React Documentation: https://react.dev/learn
