from flask import Flask
from flask_cors import CORS
from servidor.app.config import Config
from servidor.app.routes import register_routes


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    CORS(app, origins="*")

    register_routes(app)

    return app
