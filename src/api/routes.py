"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/registrar', methods=['POST'])
def handle_registrar():
    body = request.get_json()
    nuevoUsuario = User()
    nuevoUsuario.email = body["correo"]
    nuevoUsuario.password = body["pass"]
    nuevoUsuario.is_active = body["activo"]
    db.session.add(nuevoUsuario)
    db.session.commit()
    response_body = {
        "message": "se registra con exito"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST'] )
def login():
    body = request.get_json()
    email = body['correo']
    password = body['pass']

    usuario = User.query.filter_by(email=email).first() 
    token = create_access_token (identity=usuario.id)


    response_body ={
        'user': usuario.serialize(),
        'token': token
    }
    return jsonify(response_body),200

@api.route('/private', methods=["GET"])
@jwt_required()
def privada():
    return jsonify({"mensaje":"tienes permiso","permiso":True}),201