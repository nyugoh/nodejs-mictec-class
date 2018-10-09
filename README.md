# Nodejs Master Class :muscle: :rocket:
***
### Course outline :chart:

- [ ] Introduction :bulb:
       
     - what is Nodejs and it's ecosystem
     - Installing Nodejs & yarn
     - Text editors and IDEs
     - Git & github primer
     - Bash crush course
     - Basic Javascript reminder
     - Choose and agree on final goals/projects
 
 - [ ] Basics of Node
    
    - Design principles
    
 
 ### Requirements
 
 - [x] Nodejs Installed on your laptop ~ use the instructions below
 - [x] Yarn package manager ~ Instructions below
 - [x] Git software, installed
 - [x] Text-editor or IDE of choice

  
 ## Resources links :link:
 ***
 ### Installing Nodejs
 #### On Windows
Download and install the files from the links below
 - Windows 64 bits [here](https://nodejs.org/dist/v8.12.0/node-v8.12.0-x64.msi)
 - Windows 32 bits [here](  https://nodejs.org/dist/v8.12.0/node-v8.12.0-x86.msi)

#### Installing on linux 
 
 - using Node version Manager `nvm`(Recommended way)
 ```bash
        # Install nvm on your system
        curl https://raw.githubusercontent.com/creationix/nvm/v0.24.0/install.sh | bash
        # Check if nvm is installed run
        nvm --version
        # Install stable version of nodejs
        nvm install stable
        # or the latest
        nvm install latest
        # Choose a default version
        nvm use stable
 ```
 
 -  Using package manager
 ```shell
    # Use your distro package management tool
    sudo apt install nodejs nodejs-legacy 
 ```
 
 #### Installing Yarn
 We will use `yarn` as the package manager as opposed to `npm` which comes with Nodejs installation
 - Windows
    Just follow this [Link](https://yarnpkg.com/latest.msi) and download and install the software
    
 - Linux users
  ```shell
    # Add PPA sources
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    # Install yarn now
    sudo apt-get update && sudo apt-get install yarn
    # Confirm installation
    yarn --version
  ```
  
  *** 
  
  ### Installing IDEs and Text editors
  [Atom]()
  
  [Visual Studio Code]()
  
  [Sublime Text 3]()
  
  [Web Storm]()
  
  Feel free to use any other text-editor or IDE.
  
  
  ***
  
  ### Installing git
  #### Windows
  Download and install git from [here](https://git)
  
  #### Linux
  ```shell
        sudo apt install git
  ```
