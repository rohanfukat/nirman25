# from sklearn.preprocessing import LabelEncoder
# import numpy as np
# import joblib

# # Load the model and label encoder
# model = joblib.load("crop_recommendation_model.pkl")
# label_encoder = joblib.load("label_encoder.pkl")

# print("Model & Label Encoder loaded successfully!")

# custom_data = np.array([89, 44, 120, 28.75, 85.34, 6.45, 250.78]).reshape(1, -1)

# # Predict probabilities
# probabilities = model.predict_proba(custom_data)

# # Convert probabilities to percentage
# sorted_indices = np.argsort(probabilities[0])[::-1]
# sorted_classes = label_encoder.inverse_transform(sorted_indices)
# sorted_probabilities = probabilities[0][sorted_indices] * 100

# for label, prob in zip(sorted_classes, sorted_probabilities):
#     print(f"Class: {label}, Probability: {prob:.2f}%")
