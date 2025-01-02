from flask import Flask, request, jsonify
import numpy as np
import joblib  # Pour charger un modèle ML sauvegardé
from flask_cors import CORS


api = Flask(__name__)

CORS(api)


# Charger votre modèle ML (par ex. un modèle scikit-learn sauvegardé)
model = joblib.load("mon_modele_ml.pkl")

@api.route("/predict", methods=["POST"])
def predict():
    data = request.json
    try:
        # Extraire les features envoyées par le front-end
        feature1 = float(data["feature1"])
        feature2 = float(data["feature2"])
        feature3 = float(data["feature3"])
        
        # Préparer les données pour le modèle
        features = np.array([[feature1, feature2, feature3]])
        
        # Faire une prédiction
        prediction = model.predict(features)
        
        # Retourner la prédiction au front-end
        return jsonify({"prediction": prediction[0]})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    api.run(debug=True, host="0.0.0.0", port=5000)
