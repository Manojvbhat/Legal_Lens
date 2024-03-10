from transformers import PegasusForConditionalGeneration, PegasusTokenizer
import os 

# Load the fine-tuned model and tokenizer
model = PegasusForConditionalGeneration.from_pretrained("mvbhat/Legal_lens")
tokenizer = PegasusTokenizer.from_pretrained("mvbhat/Legal_lens")

# Read text from a file
with open("Input_folder/sjudge.txt", "r") as file:
    input_text = file.read()

# Tokenize the input text
inputs = tokenizer([input_text], truncation=True, padding="max_length", max_length=512, return_tensors="pt")

# Generate the summary
summary_ids = model.generate(inputs["input_ids"], attention_mask=inputs["attention_mask"], max_length=128)

# Decode the summary
summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)

# Save the summary to a file
with open("Output_summary/summary.txt", "w") as file:
    file.write(summary)
