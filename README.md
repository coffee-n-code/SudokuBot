# SudokuBot

## Development setup:

```
$ ./setup
```

Wow! That was easy.

## Configuration:

So like... open the file CONFIG in your favourite text editor. It will look
something like this:

```
API_HOST="https://matrix.org/_matrix/client/api/v1"
USER_ID=""
ACCESS_TOKEN=""
```

This next bit is insanely complicated: put the __userID__ you made for the bot
(they look something like "@username:matrix.org") inside the quotes beside
__USER__ and the __access token__ inside the quotes beside __ACCESS_TOKEN__.

### BUT WAIT!! WHAT IF I DON'T KNOW MY ACCESS TOKEN?

That's cool. Use this handly utility to grab your credentials:

```
$ ./login
```

This will prompt you for your user id and password. Use these values for your
CONFIG file.

### BUT WAIT!! WHAT IF I DIDN'T REGISTER A NEW USER FOR THE BOT?

Well download a client from [here](https://matrix.org/blog/try-matrix-now) and signup.

## Running

This is a hard one too:

```
$ ./run
```

Whoa.  Crazy shit.

## Playing the Game

First, invite the bot to your room or start a chat with it.  If the bot is
running, it will automatically accept the invite.

Then, you can play the game with these commands:

+ `!sudoku new`
	+ Starts a new game.
	+ If there is already a game being played: *are you sure?* `!sudoku yes`
+ `!sudoku restart`
+ `!sudoku solve`
	+ Solves the puzzle for you and shows you the answer.
+ `!sudoku <row><col> <number>`
	+ Where __row__ can be letters A-I
	+ Where __col__ can be numbers 0-8; and
	+ Where __number__ can be numbers 1-9

I'm sure you cna take it from here 😉 

## TODO:
	
+ Make a script to login and generate CONFIG file for us.
+ Maybe make a bin/ folder?
+ Perhaps move the CONFIG file somewhere else?
+ Maybe an install script so we don't run the bot within repo folder?