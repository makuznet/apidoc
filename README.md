# APIDOC

> This repo creates (Terraform + Ansible ) a VPS in Digital Ocean and runs NGINX displaying documentation, created with APIDOC.   

## Writing documentation
Write APIDOC code. All the APIDOC code lines are comments.  
It can be any programming language: Ruby, JS, PHP, etc.  
See api.php file as an example.  
Then run APIDOC. It wil parse its code, generate a dir, and populate it with its files.   
Launch index.html to start using documentation.  

Create .json (see apidoc.json) file to inform APIDOC about main parameters it will use when building its documentation.

Each section of comments in api.php is an API call description.
Sections can be grouped with @apiGroup parameter.  
Groups will be sorted alphabetically.

A section in my example consists of blocks called parameters:    
- @api — method, name, and group;
- @apiExample — curl request example;
- @apiParam — curl request parameters explanation;
- @apiSuccess — reply parameters explanation;
- @apiSuccessExample — successful reply example;
- @apiError — name of error;
- @apiErrorExample — error announcement example;  

## Usage 
### Creating documentation based on comments:
```shell
cd ~/myproject
apidoc -i ./ -o doc/
```
-i — interactive;  
./ — scan for files in the current dir (myproject);  
-o doc/ — put documentation in the ~/myproject/doc/ dir; 

### Running documentation
Find index.html in the /doc dir and open it in your web browser.

## Installation  
APIDOC requires Node.js to work.  
NVM (Node Version Manager) gets Node.js installed.  
Node.js has got its NPM (Node Packet Manager), which gets APIDOC installed.  

### NVM installation
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
### Node.js installation
```bash
nvm install v14.16.1
```
### APIDOC installation
```bash
npm install -g apidoc
npm list
```

## Acknowledgments

This repo was inspired by [rebrainme.com](https://rebrainme.com) team

## See Also
- [Installing Node.js with nvm](https://gist.github.com/d2s/372b5943bce17b964a79)
- [APIDOC](https://apidocjs.com/)
- [Fake Store API](https://fakestoreapi.com/)

## License
Follow Ansible, APIDOC, NGINX, Terraform, and other licenses terms and conditions.