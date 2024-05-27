FRONTEND_DIR = front_end
SERVER_DIR = server
VENV_DIR = .venv
.PHONY: all run_python_server run_frontend run_node_server clean

# Main target: setup and run everything
all: run_servers

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
