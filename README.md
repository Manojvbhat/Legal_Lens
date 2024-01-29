# Legal_Lens
Final Year Project . Legal Lens is an NLP application which gives sample verdict which judge will refer to fasten up the process.
# How to install
### clone git repository
> git clone https://github.com/Manojvbhat/Legal_Lens.git
### Open in editor
(VS code)
### cd to front_end
> cd front_end
### install dependencies
> node install
### come back to root directory
> cd ..
### cd to server
> cd server
### install spacy using pip 
check if you have pip installed
> pip --version
if not installed install it using these command
> curl https://bootst/rap.pypa.io/get-pip.py -o get-pip.py
> python get-pip.py
after installing pip install spacy
> pip install -U pip setuptools wheel
> pip install -U spacy
> python -m spacy download en_core_web_sm
after installing spacy, run the script by 
> python text_refine.py
### cd back to root directory 
> cd ..
### cd to front_end
run the dashboard using
> npm start