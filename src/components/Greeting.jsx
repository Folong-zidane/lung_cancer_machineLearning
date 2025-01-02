import '../styles/index.css'
import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [imagePath, setImagePath] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  // Ajouter des paramètres pour les champs supplémentaires
  const [formParams, setFormParams] = useState({
    feature1: '',
    feature2: '',
    feature3: '',
    feature4: '',
    feature5: '',
    feature6: '',
    feature7: '',
    feature8: '',
    feature9: '',
    feature10: '',
    feature11: '',
    feature12: '',
    feature13: '',
    feature14: '',
    feature15: '',
    feature16: '',
    feature17: '',
    feature18: '',
    feature19: '',
    feature20: '',
    feature21: '',
    feature22: '',
    feature23: '',
    feature24: '',


  });

  //Age,Gender,Air Pollution,Alcohol use,Dust Allergy,OccuPational Hazards,Genetic Risk,chronic Lung Disease,Balanced Diet,Obesity,Smoking,Passive Smoker,Chest Pain,Coughing of Blood,Fatigue,Weight Loss,Shortness of Breath,Wheezing,Swallowing Difficulty,Clubbing of Finger Nails,Frequent Cold,Dry Cough,Snoring,Level
  // Gérer les changements des champs supplémentaires
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormParams({
      ...formParams,
      [name]: value,
    });
  };

   // Action pour uploader le fichier
  const handleFileUpload = () => {
    if (!file) {
      alert('Veuillez sélectionner un fichier avant de l’uploader.');
      return;
    }
    alert(`Fichier "${file.name}" uploadé avec succès !`);
    setIsFileUploaded(true);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile); // Update the file state
      const path = URL.createObjectURL(selectedFile); // Create a preview URL
      setImagePath(path); // Update the image path
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file before submitting.");
      return;
    }
    // Implement your file upload logic here
    //console.log("Uploading:", file.name);

    try {
      // Créer un objet FormData pour envoyer des fichiers et d'autres données
      const formData = new FormData();
      formData.append('file', file);
      /**formData.append('feature1', formParams.feature1);
      formData.append('feature2', formParams.feature2);
      formData.append('feature3', formParams.feature3);
      formData.append('feature4', formParams.feature4);
      formData.append('feature5', formParams.feature5);
      formData.append('feature6', formParams.feature6);
      formData.append('feature7', formParams.feature7);
      formData.append('feature8', formParams.feature8);
      formData.append('feature9', formParams.feature9);
      formData.append('feature10', formParams.feature10);
      formData.append('feature11', formParams.feature11);
      formData.append('feature12', formParams.feature12);
      formData.append('feature13', formParams.feature13);
      formData.append('feature14', formParams.feature14);
      formData.append('feature15', formParams.feature15);
      formData.append('feature16', formParams.feature16);
      formData.append('feature17', formParams.feature17);
      formData.append('feature18', formParams.feature18);
      formData.append('feature19', formParams.feature19);
      formData.append('feature20', formParams.feature20);
      formData.append('feature21', formParams.feature21);
      formData.append('feature22', formParams.feature22);
      formData.append('feature23', formParams.feature23);
      formData.append('feature24', formParams.feature24);
      formData.append('feature25', formParams.feature25);**/


      //http://83ef-34-16-191-251.ngrok-free.app/
      
      // Envoyer les données au modèle de ML via une API
      const response = await fetch('http://83ef-34-16-191-251.ngrok-free.app/predict', {
        method: 'POST',
        body: formData,
      });


      const data = await response.json();
      console.log("Réponse brute :", response);
      alert(`Résultat : ${data.result}\nConfiance : ${data.confidence.toFixed(2)}`);
    } catch (error) {
      console.error('Erreur lors de l’envoi des données:', error);
      alert('Erreur lors de la soumission. Veuillez réessayer.');
    }
  };

  return (
    <div className="upload-container">
      <div className="scrollable-container">
      <form onSubmit={handleSubmit}>
         {/* Champs supplémentaires pour les paramètres */}


         <div className="form-group">
          <label htmlFor="feature1">Age: </label>
          <input
            type="number"
            id="feature1"
            name="feature1"
            value={formParams.feature1}
            onChange={handleInputChange}
            //required
          />
        </div>

        <div className="form-group">
          <label htmlFor="feature2">Gender:</label>
          <input
            type="number"
            id="feature2"
            name="feature2"
            min="1"
            max="2"
            value={formParams.feature2}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature3">Air Pollution:</label>
          <input
            type="number"
            id="feature3"
            name="feature3"
            min="1"
            max="9"
            value={formParams.feature3}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature4">Acohol use:</label>
          <input
            type="number"
            id="feature4"
            name="feature4"
            min="1"
            max="9"
            value={formParams.feature4}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature5">Dust Allergy:</label>
          <input
            type="number"
            id="feature5"
            name="feature5"
            min="1"
            max="9"
            value={formParams.feature5}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature6">OccuPational Hazards:</label>
          <input
            type="number"
            id="feature6"
            name="feature6"
            min="1"
            max="9"
            value={formParams.feature6}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature7">Genetic Risk:</label>
          <input
            type="number"
            id="feature7"
            name="feature7"
            min="1"
            max="9"
            value={formParams.feature7}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature8">chronic Lung Disease:</label>
          <input
            type="number"
            id="feature8"
            name="feature8"
            min="1"
            max="9"
            value={formParams.feature8}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature9">Balanced Diet:</label>
          <input
            type="number"
            id="feature9"
            name="feature9"
            min="1"
            max="9"
            value={formParams.feature9}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature10">Obesity:</label>
          <input
            type="number"
            id="feature10"
            name="feature10"
            min="1"
            max="9"
            value={formParams.feature10}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature11">Smoking:</label>
          <input
            type="number"
            id="feature11"
            name="feature11"
            min="1"
            max="9"
            value={formParams.feature11}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature12">Passive Smoker:</label>
          <input
            type="number"
            id="feature12"
            name="feature12"
            min="1"
            max="9"
            value={formParams.feature12}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature13">Chest Pain:</label>
          <input
            type="number"
            id="feature13"
            name="feature13"
            min="1"
            max="9"
            value={formParams.feature13}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature14">Coughing of Blood:</label>
          <input
            type="number"
            id="feature14"
            name="feature14"
            min="1"
            max="9"
            value={formParams.feature14}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature15">Fatigue:</label>
          <input
            type="number"
            id="feature15"
            name="feature15"
            min="1"
            max="9"
            value={formParams.feature15}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature16">Weight Loss:</label>
          <input
            type="number"
            id="feature16"
            name="feature16"
            min="1"
            max="9"
            value={formParams.feature16}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature17">Shortness of Breath:</label>
          <input
            type="number"
            id="feature17"
            name="feature17"
            min="1"
            max="9"
            value={formParams.feature17}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature18">Wheezing:</label>
          <input
            type="number"
            id="feature18"
            name="feature18"
            min="1"
            max="9"
            value={formParams.feature18}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature19">Swallowing Difficulty:</label>
          <input
            type="number"
            id="feature19"
            name="feature19"
            min="1"
            max="9"
            value={formParams.feature19}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature20">Clubbing of Finger Nails:</label>
          <input
            type="number"
            id="feature20"
            name="feature20"
            min="1"
            max="9"
            value={formParams.feature20}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature21">Frequent Cold:</label>
          <input
            type="number"
            id="feature21"
            name="feature21"
            min="1"
            max="9"
            value={formParams.feature21}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature22">Dry Cough:</label>
          <input
            type="number"
            id="feature22"
            name="feature22"
            min="1"
            max="9"
            value={formParams.feature22}
            onChange={handleInputChange}
            //required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feature23">Snoring:</label>
          <input
            type="number"
            id="feature23"
            name="feature23"
            min="1"
            max="9"
            value={formParams.feature23}
            onChange={handleInputChange}
            //required
          />
        </div>

        {/*<div className="form-group">
          <label htmlFor="feature24">Level (Low, Medium, High):</label>
          <select
            id="feature24"
            name="feature24"
            value={formParams.feature24}
            onChange={handleInputChange}
            //required
          >
            <option value="" disabled>
              -- Choisissez une option --
            </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>*/}

        

        <label >
          <input type="file" onChange={handleFileChange} required/>
        </label>
        {file && <img src={imagePath} alt="Preview" />}

        <button
            type="button"
            onClick={handleFileUpload}
            className="upload-button"
          >
            Upload
          </button>


         {/* Bouton de soumission pour tout le formulaire */}
         <button 
            type="submit" 
            onClick={handleSubmit}
            className="submit-button">
          Soumettre tout le formulaire
        </button>
      </form>
      </div>
    </div>
  );
}

export default FileUpload;

