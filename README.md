# Auction House - Client

The client of an app that creates a virtual auction space where connected users can create auctions and bid/purchase items from other users.  Live updates are achieved with web sockets.  The server can be found [here](https://github.com/allengustrowsky/BiddingHouseServer).

## Setup
- Setup the [server](https://github.com/allengustrowsky/BiddingHouseServer) first.
- Install dependencies (e.g., `yarn`)
- Start the server: `yarn start` or `npm run start`
- To start the desktop app, run `electron .` in a new terminal
- Note: a [deployed web version](https://auctionhouseclient.netlify.app/) exists but does not work because the socket connection is not configured to use https.

## Configuration
- The program runs by default on port 5180. This can be changed by modifying the port value in `vite.config.js` and `public/electron.cjs` files.

## Usage Notes
- On the initial screen, `IP` and `Port` are the IP and Port of the server.  The Port can be easily configured in the server code.
- The app flow is fairly straightforward. Error reporting will help guide users as well.