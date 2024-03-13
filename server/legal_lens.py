from transformers import PegasusForConditionalGeneration, PegasusTokenizer
import os 

# Load the fine-tuned model and tokenizer
model = PegasusForConditionalGeneration.from_pretrained("mvbhat/Legal_lens")
tokenizer = PegasusTokenizer.from_pretrained("mvbhat/Legal_lens")

# Read text from a file
with open("Input_folder/sjudge.txt", "r") as file:
    text = file.read()

# Tokenize the input text
input_tokenized = tokenizer.encode(text, return_tensors='pt',max_length=1024,truncation=True)

# Generate the summary
summary_ids = model.generate(input_tokenized,
                                  num_beams=2,
                                  no_repeat_ngram_size=1,
                                  length_penalty=0.2,
                                  min_length=100,
                                  max_length=150,
                                  early_stopping=True)

# Decode the summary
summary = [tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids][0]

print(summary)

# Save the summary to a file
with open("Output_summary/summary.txt", "w") as file:
    file.write(summary)
