# externytix
A simple C++ aimbot for Counter-Strike: Global Offensive.

#### Disclaimer
This code is for educational purposes only. Use it at your own risk. I am not responsible for any bans or penalties that may occur while using this software.

#### Description
This aimbot uses the memory.h and vector.h libraries to read and write memory in order to retrieve player and game data. It then calculates the optimal angle to shoot at a player and adjusts the view angles accordingly.

The aimbot loop runs continuously and checks for the left mouse button click to initiate the aimbot. It retrieves the player's location, team, and eye position, as well as the view angles and aim punch. It then loops through all 32 players in the game and identifies the ones that are not on the same team, are not dormant, and are not dead.

For each identified player, the aimbot retrieves the player's head position and calculates the angle required to aim at that position. It then calculates the field of view (fov) of that angle and compares it to the previous best fov. If the fov is smaller than the previous best, the angle becomes the new best angle.

If a best angle is found, the aimbot calculates the smoothed angle by dividing the best angle by 5 and adds it to the current view angles. It then writes the new view angles to memory, allowing for the player to aim at the target automatically.

#### Usage
To use this aimbot, build the code using Visual Studio and run the resulting executable while playing Counter-Strike: Global Offensive. Press and hold the left mouse button to activate the aimbot.

Note that the use of this aimbot can result in a ban from the game. Use it at your own risk.

#### Fix
If you're working with outdated code, keep in mind that Valve Team changes offsets every time CSGO is updated. To ensure accuracy, use [hazedumper](https://github.com/frk1/hazedumper/blob/master/csgo.hpp) to update the offsets.
