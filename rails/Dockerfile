FROM ruby:2.2.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN gem install bundler
RUN mkdir /jarvis
WORKDIR /jarvis
ADD Gemfile /jarvis/Gemfile
ADD Gemfile.lock /jarvis/Gemfile.lock
ADD docker/ /docker
RUN chmod 755 /docker/start
RUN bundle install
ADD . /jarvis