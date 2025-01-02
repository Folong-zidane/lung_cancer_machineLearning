import tensorflow as tf
from flask import Flask, request, jsonify
from pyngrok import ngrok
from flask_ngrok import run_with_ngrok  # Si vous utilisez Google Colab
from PIL import Image
import numpy as np

ngrok_token = '2r3uq0yH3mEoQgK8FbQjUD6Qwx8_6XLtkQMYipfBfuAS5EvWM'
port = 5000
ngrok.set_auth_token(ngrok_token)


# Initialisez Flask
app = Flask(__name__)
run_with_ngrok(app)  # Si vous êtes sur Google Colab

# Chargez le modèle pré-entraîné
model = tf.keras.models.load_model('/content/drive/MyDrive/vgg16.keras')  # Remplacez par le chemin de votre modèle

# Définir une route pour l'API
@app.route('/predict', methods=['POST'])
def predict():
    # Vérifiez si un fichier a été envoyé avec la requête
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']

    # Charger l'image reçue
    try:
        image = Image.open(file)
        image = image.resize((460, 460))  # Redimensionnez selon ce que votre modèle attend
        image_array = np.array(image) / 255.0  # Normalisation des pixels entre 0 et 1
        image_array = np.expand_dims(image_array, axis=0)  # Ajouter une dimension batch
    except Exception as e:
        return jsonify({'error': f'Error processing image: {str(e)}'}), 400

    # Faire une prédiction
    predictions = model.predict(image_array)
    cancer_prob = predictions[0][0]  # Exemple : suppose que la probabilité est à l'indice 0

    # Retourner une réponse en fonction du seuil
    response = {}
    if cancer_prob > 0.5:
        response = {'result': 'Cancer detected', 'confidence': float(cancer_prob)}
    else:
        response = {'result': 'No cancer detected', 'confidence': float(1 - cancer_prob)}

    print("Response to React:", response)  # Log de débogage
    return jsonify(response)
    # Retourner une réponse en fonction du seuil
    #if cancer_prob > 0.5:
    #   return jsonify({'result': 'Cancer detected', 'confidence': float(cancer_prob)})
    #else:
    #    return jsonify({'result': 'No cancer detected', 'confidence': float(1 - cancer_prob)})

# Lancer l'application Flask
if __name__ == '__main__':
    #app.run()
    try:
      public_url = ngrok.connect(port).public_url
      print(public_url)
      app.run()
    finally:
      ngrok.disconnect(public_url=public_url)
