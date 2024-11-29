import google.generativeai as genai

genai.configure(api_key="AIzaSyBC2Ekvy7t4URUiW4DLIT0riTTlIIu8mSY")
model = genai.GenerativeModel("gemini-1.5-flash")
response = model.generate_content("Explain how AI works")
print(response.text)
