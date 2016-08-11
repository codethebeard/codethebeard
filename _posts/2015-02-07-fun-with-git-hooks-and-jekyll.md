---
layout: post
title: "Fun with Git Hooks and Jekyll"
date: "Sat Feb 07 2015"
categories: blog
published: true
---

If you haven't already noticed, I LOVE [Jekyll](http://jekyllrb.com). As a developer, it's simple, fast, and fun to play around with. If you use [Github](http://www.github.com) you can even [host your site for free](https://help.github.com/articles/using-jekyll-with-pages/)! It's pretty awesome.

Here's a solution for creating a git repo workflow for publishing your Jekyll site on your own server. There are tons of ways of doing this. This is just my own solution for this problem.

Requirements

- Git, Jekyll, and SSH must be installed/enabled on your server.
- You must have Git and Jekyll installed on your local machine.


## Local Setup

Create a local git repo of your Jekyll site.

{% highlight bash linenos %}
cd /path/to/your/jekyll/site
git init
{% endhighlight %}

That's it.

## Server Setup

This will be different for a lot of you. Basically, you need three directories.
- A repo directory where your site will live as ONLY a repository.
- A temporary directory where files are copied to.
- Your public_html directory or where your website files should be hosted.

In my case my directories are as follows.

- /Home/repos/myjekyllsite/
- /Home/repos/tmp/
- /Home/public_html/

Make sure that you have installed Jekyll and Git on your server and that SSH is enabled. If you don't know how to install these yourself, contact your hosting company. A lot of times they will be willing to help you.

SSH into your server and create a repos directory outside of your public_html directory.

{% highlight bash linenos %}
mkdir /Home/repos/

# This directory cannot be in
# the same directory that you are hosting from.
{% endhighlight %}

Navigate inside the directory, create a new directory for your project and run the following.

{% highlight bash linenos %}
cd /Home/repos

mkdir myjekyllsite.git
cd myjekyllsite.git

git init --bare
{% endhighlight %}

Next, navigate into your newly created hooks directory and rename "post-receive.sample" to "post-receive".

{% highlight bash linenos %}
cd hooks
mv post-receive.sample post-receive

{% endhighlight %}

Open that file to edit it in your favorite text editor and replace everything with the following. Keep in mind that you will want to change the paths to match up with your directory structure.

{% highlight bash linenos %}
#!/bin/bash -l

#The direcory where your repo lives.
GIT_REPO=/home/repos/myjekyllsite.git

#This is a temporary directory that you can write to.
TMP_GIT_CLONE=/home/repos/tmp/myjekyllsite

#This is where your final site files will live.
PUBLIC_WWW=/home/public_html

#clone the repo to the tmp directory
git clone $GIT_REPO $TMP_GIT_CLONE

#Run jekyll build on the tmp directory
#This might be different depending on your hosting.
#In my case it was /usr/local/rubies/ruby-1.9.3-p547/lib/ruby/gems/1.9.1/gems/jekyll-2.5.3/bin/jekyll build --source ...
jekyll build --source $TMP_GIT_CLONE --destination $TMP_GIT_CLONE/_site

#Copy the generated site files from the tmp directory to the public directory.
cp $TMP_GIT_CLONE/_site/. $PUBLIC_WWW -fR

#Remove the tmp directory
rm -Rf $TMP_GIT_CLONE

exit
{% endhighlight %}

Save and your done.

##Back to your local machine

Add and commit all of your files and then hook up your local git with your server repo.

{% highlight bash linenos %}
git add .
git commit -m "initial commit"
git remote add origin ssh://username@domainname.com:/home/repos/myjekyllsite.git
{% endhighlight %}

###THEN PUSH THAT SHIZ!

{% highlight bash linenos %}
git push -u origin master

{% endhighlight %}
