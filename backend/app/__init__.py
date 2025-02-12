from flask import Flask
from flask_cors import CORS
from config import config
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(config)

    CORS(app)
    bcrypt = Bcrypt(app)
    migrate.init_app(app, db)

    from app import routes 
