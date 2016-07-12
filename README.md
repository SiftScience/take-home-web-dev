# Sift Science Web Developer Take Home

We're absolutely thrilled to have you interviewing at Sift Science! The purpose
of this exercise is to get a good view on your technical skills and see how you
attack problems. We're going to focus more on best practices and
how you structure / solve problems.

## Goal

#### Problems to solve:
- Finish the panel navigation so when a user clicks on a different product tab
 the corresponding product panel appears.
 - You're job is also to make this panel responsive. Can a user access the same
   content on their phone? How do you maintain usability on a smaller screen?

#### Things to get right:

     **CSS / SASS**
     - Sass architecture ( how you leverage SASS to aid you in development ).
     - Use of css specificity
     - Readable, maintable code. I.e. modularity, rememberable name choices (
       i.e. **not** `this-box`)

     **Javascript**
     - Event Bindings / Delegations

#### How to submit

Once you are satisfied with your work please be sure to `commit` your work. Zip
up the project folder and send it to us as an attachment as an email.


#### Nice to haves:
- Performant animations. I.e. leverage GPU vs CPU.


#### Real Live Demo:
[https://siftscience.com/chargebacks#features](https://siftscience.com/chargebacks#features)


## Setup

There is a task runner builted into this repo to make your development cycles
faster. Please be sure to ask any questions if you have issues setting the task
runner up!


#### Dependencies

- `node > 6` ( suggest using a version manager:
  [nvm](https://github.com/creationix/nvm) or
    [nodenv](https://github.com/nodenv/nodenv) )
- gulp `npm install -g gulp-cli`


#### Installation

- `git clone --recursive git@github.com:SiftScience/take-home-web-dev.git`
- npm install

**WARNING**: This repo includes a `git` submodule. If you inadvertantly forget
the `--recursive` flag simply run `git submodule update --init --recursive`

#### Tasks
The primary `task` is `dev` which will watch your html / sass / javascript files
and load server them at `localhost:3000/`

- `gulp dev`

