# J.A.R.V.I.S. (Just A Rather Very Intelligent System)

## Installation

We will be using Docker to set up the development environment for this rails app. 

Please install Docker for your platform from this download page. [https://docs.docker.com/engine/installation/](https://docs.docker.com/engine/installation/)

Now, wherever you cloned this directory, `cd` into the directory. 

To bring the server up and listening execute this command.

`docker-compose up --build`

To execute any rails or rake commands you will have to prefix that command with `docker-compose run web <command>`

For example, to create and migrate the database, execute the following.

`docker-compose run web rake db:create && rails db:migrate`

Now, navigate to [http://localhost:3000](http://localhost:3000) to see the home page.

### Caveats

On windows, when running the `docker-compose run` command, you will probably have to add -d directly after that. For example: `docker-compose run -d web rake db:create`

## Old Installation

Please don't use this unless you want a more in-depth setup for OSX

Get Homebrew

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Get Ruby Version Manager

`brew install rvm`

Get Ruby

`brew install ruby-2.2.3`

Get Postgres

`brew install postgresql`

## Setting up the Project

Please `cd` into this directory 

Install all the gem
`bundle`

## Running the project

Boot up the rails server
`rails server`

Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

To be determined.