import spacy
nlp=spacy.load("en_core_web_sm")
with open("verdict.txt", "r") as f:
    text=f.read()
doc= nlp(text)
for sent in doc.sents:
    print(sent)