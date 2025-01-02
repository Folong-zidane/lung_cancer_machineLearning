import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    feature1: "",
    feature2: "",
    feature3: "",
  });
  const [result, setResult] = useState(null);

  // Gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    try {
      // Envoyer les données à votre modèle via une API
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convertir les données en JSON
      });

      const data = await response.json();
      setResult(data.prediction); // Stocker la réponse (par ex. prédiction)
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    }
  };

  return (
    <div>
      <h1>Prédiction avec un modèle ML</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Feature 1:</label>
          <input
            type="text"
            name="feature1"
            value={formData.feature1}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Feature 2:</label>
          <input
            type="text"
            name="feature2"
            value={formData.feature2}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Feature 3:</label>
          <input
            type="text"
            name="feature3"
            value={formData.feature3}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>

      {result && (
        <div>
          <h2>Résultat du modèle :</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
