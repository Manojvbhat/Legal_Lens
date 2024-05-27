# Define the virtual environment directory
VENV_DIR = .venv

# Define the paths
REQUIREMENTS = requirements.txt
PACKAGE_JSON = package.json
FRONTEND_DIR = frontend
SERVER_DIR = server

.PHONY: all setup_python_env install_python_deps install_node_deps run_python_server run_frontend run_node_server clean

# Main target: setup and run everything
all: setup_python_env install_python_deps install_node_deps run_servers

# Setup Python virtual environment
setup_python_env:
	python -m venv $(VENV_DIR)
	source .venv/bin/activate

# Install Python dependencies
install_python_deps: setup_python_env
	$(VENV_DIR)/Scripts/pip install -r $(REQUIREMENTS)

# Install Node.js dependencies
install_node_deps:
	npm install

# Run the Python server
run_python_server:
	$(VENV_DIR)/Scripts/python $(SERVER_DIR)/legal_lens.py &

# Run the frontend
run_frontend:
	cd $(FRONTEND_DIR) && npm start &

# Run the Node.js server
run_node_server:
	cd $(SERVER_DIR) && node API_servers.js

# Run all servers
run_servers: run_python_server run_frontend run_node_server

# Clean up the virtual environment
clean:
ifeq ($(OS),Windows_NT)
	if exist $(VENV_DIR) rmdir /S /Q $(VENV_DIR)
	if exist node_modules rmdir /S /Q node_modules
	if exist $(FRONTEND_DIR)\node_modules rmdir /S /Q $(FRONTEND_DIR)\node_modules
	if exist $(SERVER_DIR)\node_modules rmdir /S /Q $(SERVER_DIR)\node_modules
else
	rm -rf $(VENV_DIR)
	rm -rf node_modules
	rm -rf $(FRONTEND_DIR)/node_modules
	rm -rf $(SERVER_DIR)/node_modules
endif
