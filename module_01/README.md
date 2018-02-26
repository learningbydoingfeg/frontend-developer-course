# Configuration development environment


## Terminal
The command line (also known as console, terminal or system symbol) was the only way to interact with a computer before graphical interfaces appeared. The command line is an application in which you can write and execute commands to perform tasks such as:

- Browse the folders of your computer.
- Manipulate files (create, edit, copy, move and delete).
- Connect to remote servers.
- Create scripts to help you with your daily tasks.
- And much more!

### Install

#### Windows
- [Bash Linux in Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- With **Chocolatey** please follow the next [instructions](https://chocolatey.org/packages/Cmder)
- Download [cmder](https://gingter.org/2016/11/16/running-windows-10-ubuntu-bash-in-cmder/windows)

#### Linux
- Terminator
```shell
sudo add-apt-repository ppa:gnome-terminator
sudo apt-get update
sudo apt-get install terminator
```

#### Mac
- [iTerm](https://www.iterm2.com/)

## Git

Git allows you to save a history of changes to your projects and work with other developers in the same project.

The most important concept of git is the commit. A commit is a photograph of your project at a certain time. The way git stores the change history of your project is creating a chain of commits.

Git is a console application with several subcommands that allow us, among other things, to commit, to see the changes that we have not committed, to list the commits. and see the difference between commits.

### Install

#### Windows

- [Git for Windows](https://gitforwindows.org/)

#### Linux
```shell
sudo apt-get update
sudo apt-get install git
```

#### Mac
- Homebrew (Prerequisite)
Package managers make it so much easier to install and update applications (for Operating Systems) or libraries (for programming languages). The most popular one for OS X is [Homebrew](http://brew.sh/).

An important dependency before Homebrew can work is the **Command Line Tools** for **Xcode**. These include compilers that will allow you to build things from source.

Now, Xcode weights something like 2GB, and you don't need it unless you're developing iPhone or Mac apps. Good news is Apple provides a way to install only the Command Line Tools, without Xcode. To do this you need to go to [http://developer.apple.com/downloads](http://developer.apple.com/downloads), and sign in with your Apple ID (the same one you use for iTunes and app purchases). Unfortunately, you're greeted by a rather annoying questionnaire. All questions are required, so feel free to answer at random.

Once you reach the downloads page, search for "command line tools", and download the latest **Command Line Tools (OS X Mountain Lion) for Xcode**. Open the **.dmg** file once it's done downloading, and double-click on the **.mpkg** installer to launch the installation. When it's done, you can unmount the disk in Finder.

**Note**: If you are running **OS X 10.9 Mavericks**, then you can install the Xcode Command Line Tools directly from the command line with `$ xcode-select --install`, and you don't have to go through the download page and the questionnaire.

Finally, we can install Hombrew! In the terminal paste the following line (without the `$`), hit **Enter**, and follow the steps on the screen:

    $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

One thing we need to do is tell the system to use programs installed by Hombrew (in `/usr/local/bin`) rather than the OS default if it exists. We do this by adding `/usr/local/bin` to your `$PATH` environment variable:

    $ echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile

Open a new terminal tab with **Cmd+T** (you should also close the old one), then run the following command to make sure everything works:

    $ brew doctor
    
### Usage

To install a package (or **Formula** in Homebrew vocabulary) simply type:

    $ brew install <formula>
        
To update Homebrew's directory of formulae, run:

    $ brew update
    
**Note**: I've seen that command fail sometimes because of a bug. If that ever happens, run the following (when you have Git installed):

    $ cd /usr/local
    $ git fetch origin
    $ git reset --hard origin/master

To see if any of your packages need to be updated:

    $ brew outdated
    
To update a package:

    $ brew upgrade <formula>
        
Homebrew keeps older versions of packages installed, in case you want to roll back. That rarely is necessary, so you can do some cleanup to get rid of those old versions:

    $ brew cleanup

To see what you have installed (with their version numbers):

    $ brew list --versions

- Git
What's a developer without [Git](http://git-scm.com/)? To install, simply run:

    $ brew install git
    
When done, to test that it installed fine you can run:

    $ git --version
    
And `$ which git` should output `/usr/local/bin/git`.

Let's set up some basic configuration. Download the [.gitconfig](https://raw.githubusercontent.com/khriztianmoreno/mac-dev-setup/master/.gitconfig) file to your home directory:

    $ cd ~
    $ curl -O https://raw.githubusercontent.com/khriztianmoreno/mac-dev-setup/master/.gitconfig

It will add some color to the `status`, `branch`, and `diff` Git commands, as well as a couple aliases. Feel free to take a look at the contents of the file, and add to it to your liking.

Next, we'll define your Git user (should be the same name and email you use for [GitHub](https://github.com/) and [Heroku](http://www.heroku.com/)):

    $ git config --global user.name "Your Name Here"
    $ git config --global user.email "your_email@youremail.com"

They will get added to your `.gitconfig` file.

To push code to your GitHub repositories, we're going to use the recommended HTTPS method (versus SSH). So you don't have to type your username and password everytime, let's enable Git password caching as described [here](https://help.github.com/articles/set-up-git):

    $ git config --global credential.helper osxkeychain
    
**Note**: On a Mac, it is important to remember to add `.DS_Store` (a hidden OS X system file that's put in folders) to your `.gitignore` files. You can take a look at this repository's [.gitignore](https://github.com/nicolashery/mac-dev-setup/blob/master/.gitignore) file for inspiration.

## Editor

[VSCode](https://code.visualstudio.com/) is a code editor redefined and optimized for building and debugging modern web and cloud applications. Visual Studio Code is free and available on your favorite platform - Linux, Mac OSX, and Windows

### Install

- Download version for you laptop [here](https://code.visualstudio.com/)

#### Plugins

- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
- [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Guides](https://marketplace.visualstudio.com/items?itemName=spywhere.guides)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)
